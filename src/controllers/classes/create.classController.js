const { Classes, Users } = require("../../models");
const { body } = require("express-validator");
const moment = require("moment");



const service = async (req,res)=> {
    try {
        const user = await Users.findOne({
            where: {
                id: req.auth.user.id
            }
        })
        if(user.status === "admin") {
            const payload = req.body;
            payload.file = process.env.baseURL + req.files[0].originalname;
            const requestDB = await Classes.create(payload);
            
            return res.json({
                msg: "Class created successfully",
                data: requestDB,
            });
        } else {
            return res.status(403).json({
                msg: "You are not an admin"
            })
        }
        // const payload = req.body;
        //     const requestDB = await Classes.create(payload);
        //     console.log(req.auth.user.id)
        //     return res.json({
        //         msg: "Class created successfully",
        //         data: requestDB,
        //     });
        
    } catch (error) {
        return res.status(500).json({
            msg: error.toString(),

        })
    }
}

const validation = [
    body("name").notEmpty().withMessage("Name is required").custom(async (value)=> {
        const requestDB = await Classes.findOne({
            where: {
                name: value
            }
        });
        if (requestDB) {
            throw new Error ("Name already exist");
        }
    }),
    body("description").notEmpty().withMessage("Description is required"),
    body("dateFrom").notEmpty().withMessage("DataFrom is required").custom((value)=> {
        // check future date
        value = moment(value);
        if (value.isAfter(moment())) {
            return true;
        } else {
            throw new Error("DateFrom must be future date");
        }
    }),
    body("dateTo").notEmpty().withMessage("DataTo is required"),
];
module.exports= {service, validation}