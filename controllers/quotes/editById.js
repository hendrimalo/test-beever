const { Quote } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  const quoteDb = await Quote.findByPk(id);
  if (!quoteDb) {
    return res.status(404).json({
      status: 'error',
      message: `data quote with id ${id} not found`,
    });
  }

  const { favorite, quote } = req.body;
  if (quote) {
    const checkQuote = await Quote.findOne({
      where: { quote },
    });

    if (checkQuote && quote !== quoteDb.quote) {
      return res.status(409).json({
        status: 'error',
        message: 'quote already exist',
      });
    }
  }

  const quoteEdited = await quoteDb.update({
    quote,
    favorite,
  });

  return res.status(200).json({
    status: 'success',
    data: `${quoteEdited.quote} success edited`,
  });
};
