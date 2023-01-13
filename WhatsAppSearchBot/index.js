const express = require('express');
const cors = require('cors');
const incoming = require('./Routers/incoming')

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:false}));

//app.use('/api/v1',incoming);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message
    }
  });
});

app.listen(PORT, () => console.log(`App Listening on port ${PORT}`));

module.exports = app;