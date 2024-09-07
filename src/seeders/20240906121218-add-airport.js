'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports' , [
      {
        name: 'Kempegowda International Airport',
        cityId: 1,  // Bengaluru
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mangalore',
        cityId: 1,  // Bengaluru
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 2,  // New Delhi
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chaudhary Charan Singh International Airport',
        cityId: 3,  // Luknow
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International',
        cityId: 4,  // Mumbai
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Navi Mumbai International Airport',
        cityId: 4,  // Mumbai
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juhu Aerodrome',
        cityId: 4,  // Mumbai
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chennai International Airport',
        cityId: 6,  // Chennai
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rajiv Gandhi International Airport',
        cityId: 7,  // Hyderabad
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sardar Vallabhbhai Patel International Airport',
        cityId: 8,  // Gujrat
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airports', null, {});
  }
};
