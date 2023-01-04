const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const createDb = require('../config/db');
const User = require('../models/userModels');

const { validateEmail, validateName, validatePassword } = require('../utils/Validator');

// Sync all defined models to the DB
createDb.sync().then(() => {
    console.log(`Db is running`);
});

router.get('/', (_req, res) => {
    res.status(200).send(`Server is running proerly.`);
});

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExist = await User.findOne({
            where: {
                email
            }
        });

        if (userExist)
            return res.status(403).send(`User: ${name} already exist`);

        if (!validateEmail(email)) {
            return res.status(400).send("Invalid Email Address.")
        }
        if (!validatePassword(password)) {
            return res.status(400).send("Invalid Password length");
        }

        //Encrypt the password.
        const passwordEncrypt = await bcrypt.hash(password, 10);

        const saveData = {
            name, email, password: passwordEncrypt
        };
        const userCreated = await User.create(saveData);

        console.log(userCreated);

        res.status(201).send("User successfully registered.");

    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email.length === 0) {
            return res.status(400).send("Error: Please enter your email");
        }
        if (password.length === 0) {
            return res.status(400).send("Error: Please enter your password");
        }

        const userExist = await User.findOne({
            where: {
                email: email
            }
        });

        if (!userExist)
            return res.status(403).send(`User does not exist`);
            
        //* hashes the entered password and then compares it to the hashed password stored in the database
        const passMatch = await bcrypt.compare(password, userExist.password);

        if (!passMatch) {
            return res.status(400).send("Error: Incorrect password");
        }

        return res.status(200).send(`Welcome ${userExist.name}. You are logged in`);
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Error: ${err.message}`);
    }
});

module.exports = router;