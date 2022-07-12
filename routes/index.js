const express = require('express');

const {
  URL_QUOTES_RANDOM,
} = process.env;
const apiAdapter = require('../utils/axiosAdapter');

const api = apiAdapter(URL_QUOTES_RANDOM);

const router = express.Router();

/* fetch quotes random from https://api.kanye.rest */
router.get('/random', async (req, res) => {
  try {
    const quote = await api.get('/');

    return res.status(200).json({
      status: 'success',
      data: quote.data,
    });
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({
        status: 'error',
        message: 'quote unavailable',
      });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
});

module.exports = router;
