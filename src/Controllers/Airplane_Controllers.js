const { airplaneService } = require('../services/index');

const AirplaneService = new airplaneService();

/**
 * POST : /airport
 * data : {name: Bangalore}
 */


const create_airplane = async (req,res) => {

    try {

        const airplane = await AirplaneService.create_airplane(req.body);
        return res.status(201).json({
            data : airplane,
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

const deleat_airplane = async (req,res) => {
    
    try {

        const response = await AirplaneService.deleat_airplane(req.params.id);
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

const get_airplane = async (req,res) => {
    
    try {

        const response = await AirplaneService.get_airplane(req.params.id);
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

const update_airplane = async (req,res) => {
    
    try {

        const response = await AirplaneService.update_airplane(req.params.id , req.body);
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

const get_All_airplane =async (req,res) =>{

    try {

        const response =await AirplaneService.get_All_airplane(req.query);
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
    create_airplane,
    deleat_airplane,
    get_airplane,
    update_airplane,
    get_All_airplane
}