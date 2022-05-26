const { Sessions, Classes } = require('../../models');
const {body} = require("express-validator")

// create new session
const service = async (req,res) => {
    try {
        // check class id
        // const classId = req.body.classId;
        // const classSelect = await Classes.findOne({
        //   where : {
        //     id : classId
        //   }  
        // })
        // if (!classSelect) {
        //     return res.status(404).json({
        //         msg: "Class not found"
        //     })
        // }
        
        // create session
        const payload = req.body;
        const requestDB = await Sessions.create(payload);
        return res.json({
            msg: "Session created successfully",
            data: requestDB
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.toString()
        })
    }
}

const validation = [
    body("classId").notEmpty().withMessage("Class id is required").custom(async(classId)=> {
        const classSelect = await Classes.findOne({
          where : {
            id : classId
          }  
        })
        if (!classSelect) {
            throw new Error("Class not found")
        }
    }),
    body("name").notEmpty().withMessage("Name is required"),
];

module.exports = { service, validation };