const { airplaneRepo } = require('../repository/index');

class AirplaneService {
    constructor() {
        this.AirplaneRepo = new airplaneRepo(); 
    }

    async create_airplane(data){
        try {
            
            const airplane = await this.AirplaneRepo.create_airplane(data);
            return airplane;
    
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async deleat_airplane(id){
        try {
    
            const response = await this.AirplaneRepo.deleat_airplane(id);
            return response;
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async get_airplane(id){
        try {
    
            const airplane = await this.AirplaneRepo.get_airplane(id);
            return airplane; 
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }
    
    async update_airplane(id , data) {
        try {
    
            const airplane = await this.AirplaneRepo.update_airplane(id , {
                modelNumber:data.modelNumber,
                capacity:data.capacity
            });
            return airplane; 
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }

    async get_All_airplanes(filter){
        try {

            const airplane = await this.AirplaneRepo.get_All_airplanes({name: filter.name});
            return airplane;
            
        } catch (error) {
            console.log("somethings wrong with the Repository");
            throw{error};
        }
    }

}


module.exports = AirplaneService;