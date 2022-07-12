const { Quote } = require('../../models');

module.exports = async (req, res) => {
  try {
    const quoteIds = req.query.quote_ids || [];
    const quoteFavorites = req.query.quote_favorites || [];

    const sqlOptions = {
      attributes: ['id', 'quote', 'favorite'],
    };

    if (quoteIds.length) {
      sqlOptions.where = {
        id: quoteIds,
        favorite: quoteFavorites,
      };
    }

    const quotes = await Quote.findAll(sqlOptions);

    if (quotes.length === 0) {
      return res.status(403).json({
        status: 'error',
        message: 'data quotes not found',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: quotes,
    });
  } catch (error) {
    console.log(error);
  }
};
