const { cityService } = require('../services/index');

const CityService = new cityService();

/**
 * POST : /city
 * data : {name: Bangalore}
 */


const create_city = async (req,res) => {

    try {

        const city = await CityService.create_city(req.body);
        return res.status(201).json({
            data : city,
            success:true,
            message: "Successfully created  a city",
            err :{},
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to create a city",
            success: false,
            err: error
        });
    }

}

//the convention for delete -> /city/:id [:id] -> refer to params format of the convention

const deleat_city = async (req,res) => {
    
    try {

        const response = await CityService.deleat_city(req.params.id);
        return res.status(200).json({
            data : response,
            success:true,
            message: "Successfully deleted  a city",
            err :{},
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to delete a city",
            success: false,
            err: error
        });
    }
}

// GET: /city/:id will be going through parameters

const get_City = async (req,res) => {
    
    try {

        const response = await CityService.get_City(req.params.id);
        return res.status(200).json({
            data : response,
            success:true,
            message: "Successfully fetched  a city",
            err :{},
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to get a city",
            success: false,
            err: error
        });
    }
}

//Patch -> /city/:id -> req.body 

const update_City = async (req,res) => {
    
    try {

        const response = await CityService.update_City(req.params.id , req.body);
        return res.status(200).json({
            data : response,
            success:true,
            message: "Successfully updated  a city",
            err :{},
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to updated a city",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create_city,
    deleat_city,
    get_City,
    update_City
}