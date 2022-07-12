module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('quotes', [
      {
        quote: 'I\'m nice at ping pong',
        favorite: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        quote: 'We will cure hunger',
        favorite: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('quotes', null, {});
  },
};
