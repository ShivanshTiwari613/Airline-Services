const { Op } = require('sequelize');
const { Airplane } =require('../models/index');

class airplane_Repos{

    async create_airplane({ name }){
        try {
            
            const airplane = await Airplane.create({
                name //the key represents the name on our model and the value name is the name given by controller
            });

            return airplane;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }        
    }

    async deleat_airplane(city_Id){
        try {

            await Airplane.destroy({
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

    async update_airplane(city_Id , data) {
        try {

            const airplane = await Airplane.update(data,{
                where :{
                    id:city_Id
                }
            });
            return airplane;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }
    }

    async get_airplane(data) {
        try {
            
            const city = await Airplane.findByPk(data);
            return city;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }
    }

    async get_All_airplanes(filter) {
        try {

            if(filter.name){
                const airplanes = await airplane.findAll({
                    where:{
                        name :{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return airplanes;
            }

            const airplane = await airplane.findAll();
            return airplane;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error };
        }
    }
}

module.exports = airplane_Repos;