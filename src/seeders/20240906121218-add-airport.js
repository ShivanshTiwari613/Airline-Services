'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports' , [
      {
        name:'Kempegowda International Airport',
        cityId:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mangalore',
        cityId:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Indira Gandhi International Airport',
        cityId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Chaudhary Charan Singh International Airport',
        cityId:3,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Chhatrapati Shivaji Maharaj International',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Navi Mumbai International Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Juhu Aerodrome',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Chennai International Airport',
        cityId:6,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Rajiv Gandhi International Airport',
        cityId:7,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Sardar Vallabhbhai Patel International Airport',
        cityId:8,
        createdAt:new Date(),
        updatedAt:new Date()
      },

  ], {} )

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
