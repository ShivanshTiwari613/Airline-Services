const { Op } = require('sequelize');
const { Airport } =require('../models/index');

class airport_Repos{

    async create_airport({ name }){
        try {
            
            const airport = await Airport.create({
                name //the key represents the name on our model and the value name is the name given by controller
            });

            return airport;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }        
    }

    async deleat_airport(city_Id){
        try {

            await Airport.destroy({
                where:{
                    id:city_Id
                }
            });
            return true;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }
    }

    async update_Airport(city_Id , data) {
        try {

            const airport = await Airport.update(data,{
                where :{
                    id:city_Id
                }
            });
            return airport;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }
    }

    async get_airport(city_Id) {
        try {
            
            const city = await Airport.findByPk(city_Id);
            return city;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }
    }

    async get_All_Airports(filter) {
        try {

            if(filter.name){
                const airports = await Airport.findAll({
                    where:{
                        name :{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return airports;
            }

            const airport = await Airport.findAll();
            return airport;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error };
        }
    }
}

module.exports = airport_Repos;