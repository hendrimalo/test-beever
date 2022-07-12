const { Quote } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  const quote = await Quote.findByPk(id);
  if (!quote) {
    return res.status(404).json({
      status: 'error',
      messsage: `data quote with id ${id} not found`,
    });
  }

  await quote.destroy();

  return res.status(200).json({
    status: 'success',
    message: `data quote with id ${id} success to deleted`,
  });
};
