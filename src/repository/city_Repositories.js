const { City } =require('../models/index');

class city_Repos{

    async create_city(name){
        try {
            
            const city = await City.create({
                name : name //the key represents the name on our model and the value name is the name given by controller
            })

            return city;

        } catch (error) {
            console.log("Somethong went wrong iin the repository layer");
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
            console.log("Somethong went wrong iin the repository layer");
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

            return city;
            
        } catch (error) {
            console.log("Somethong went wrong iin the repository layer");
            throw{ error }; 
        }
    }

    async get_City(city_Id) {
        try {
            
            const city = await City.findByPk(city_Id);
            return city;

        } catch (error) {
            console.log("Somethong went wrong iin the repository layer");
            throw{ error }; 
        }
    }
}