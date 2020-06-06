'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Contacts', [{
    firstName: 'Samuel',
    lastName: 'Matthew',
    phone: '111-222-3333',
    email: 'samat@who.com',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    firstName: 'Muyi',
    lastName: 'Obed',
    phone: '444-555-6666',
    email: 'muyiobed@graphics.com',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    firstName: 'John',
    lastName: 'Dmola',
    phone: '402-437-0001',
    email: 'johin@unl.tech',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }], {});
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
