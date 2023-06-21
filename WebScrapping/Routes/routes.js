const express = require('express');
const router = express.Router();
const main = require('../ScarpeFn/Scrape');

router.post('/indeed', async (req, res) => {
    try {
        const { skill, location } = req.body;
        let scrap = await main(skill, location);

        return res.status(200).json({
            status: "ok",
            list: scrap?.list || {},
        });

    } catch (err) {
        console.error(err);
    }
})

module.exports = router;