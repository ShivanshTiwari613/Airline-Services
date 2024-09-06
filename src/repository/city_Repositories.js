const { City } =require('../models/index');

class city_Repos{

    async create_city({ name }){
        try {
            
            const city = await City.create({
                name //the key represents the name on our model and the value name is the name given by controller
            });

            return city;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }        
    }

    async deleat_city(city_Id){
        try {

            await City.destroy({
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

    async update_City(city_Id , data) {
        try {

            const city = await City.update(data,{
                where :{
                    id:city_Id
                }
            }) ;

            // const city =await City.findByPk(city_Id);
            // city.name=data.name;
            // await city.save();
            return city;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }
    }

    async get_City(city_Id) {
        try {
            
            const city = await City.findByPk(city_Id);
            return city;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error }; 
        }
    }

    async get_All_City() {
        try {

            const city = await City.findAll();
            return city;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{ error };
        }
    }
}

module.exports = city_Repos;