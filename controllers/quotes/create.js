const { Quote } = require('../../models');

module.exports = async (req, res) => {
  const { quote } = req.body;

  const checkQuote = await Quote.findOne({
    where: { quote },
  });

  if (checkQuote) {
    return res.status(409).json({
      status: 'error',
      message: 'quote already exist',
    });
  }

  const quoteCreated = await Quote.create({
    quote,
  });

  return res.status(200).json({
    status: 'success',
    data: `${quoteCreated.quote} success created`,
  });
};
