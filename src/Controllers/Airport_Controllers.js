const { airportService } = require('../services/index');

const AirportService = new airportService();

/**
 * POST : /airport
 * data : {name: Bangalore}
 */


const create_airports = async (req,res) => {

    try {

        const airport = await AirportService.create_airport(req.body);
        return res.status(201).json({
            data : airport,
            success:true,
            message: "Successfully created  a airport",
            err :{},
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to create a airport",
            success: false,
            err: error
        });
    }

}

//the convention for delete -> /city/:id [:id] -> refer to params format of the convention

const deleat_airports = async (req,res) => {
    
    try {

        const response = await AirportService.deleat_airport(req.params.id);
        return res.status(200).json({
            data : response,
            success:true,
            message: "Successfully deleted  a airport",
            err :{},
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to delete a airport",
            success: false,
            err: error
        });
    }
}

// GET: /airport/:id will be going through parameters

const get_airports = async (req,res) => {
    
    try {

        const response = await AirportService.get_airport(req.params.id);
        return res.status(200).json({
            data : response,
            success:true,
            message: "Successfully fetched  a airport",
            err :{},
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to get a airport",
            success: false,
            err: error
        });
    }
}

//Patch -> /airport/:id -> req.body 

const update_airports = async (req,res) => {
    
    try {

        const response = await AirportService.update_Airport(req.params.id , req.body);
        return res.status(200).json({
            data : response,
            success:true,
            message: "Successfully updated  a airport",
            err :{},
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to updated a airport",
            success: false,
            err: error
        });
    }
}

const get_All_airports =async (req,res) =>{

    try {

        const response =await AirportService.get_All_Airports(req.query);
        return res.status(200).json({
            data : response,
            success:true,
            message: "Successfully updated  a airport",
            err :{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not abel to updated a airport",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create_airports,
    deleat_airports,
    get_airports,
    update_airports,
    get_All_airports
}