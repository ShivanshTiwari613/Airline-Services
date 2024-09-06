const { cityRepo } = require('../repository/index');

class CityService {
    constructor() {
        this.CityRepo = new cityRepo(); 
    }

    async create_city(data){
        try {
            
            const city = await this.CityRepo.create_city(data);
            return city;
    
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async deleat_city(city_Id){
        try {
    
            const response = await this.CityRepo.deleat_city(city_Id);
            return response;
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async get_City(city_Id){
        try {
    
            const city = await this.CityRepo.get_City(city_Id);
            return city; 
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async update_City(city_Id , data) {
        try {
    
            const city = await this.CityRepo.update_City(city_Id , data);
            return city; 
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }

    async get_All_City(){
        try {

            const city = await this.CityRepo.get_All_City();
            return city;
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }

}


module.exports = CityService;