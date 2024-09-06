const { airportRepo } = require('../repository/index');

class AirportService {
    constructor() {
        this.AirportRepo = new airportRepo(); 
    }

    async create_airport(data){
        try {
            
            const city = await this.AirportRepo.create_airport(data);
            return city;
    
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async deleat_airport(city_Id){
        try {
    
            const response = await this.AirportRepo.deleat_airport(city_Id);
            return response;
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async get_airport(city_Id){
        try {
    
            const city = await this.AirportRepo.get_airport(city_Id);
            return city; 
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async update_Airport(city_Id , data) {
        try {
    
            const city = await this.AirportRepo.update_Airport(city_Id , {
                name:data.name,
                address:data.address
            });
            return city; 
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }

    async get_All_Airports(filter){
        try {

            const airport = await this.AirportRepo.get_All_Airports({name: filter.name});
            return airport;
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }

}


module.exports = AirportService;