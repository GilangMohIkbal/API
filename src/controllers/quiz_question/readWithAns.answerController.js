const { Quiz_Question , Quiz_answer} = require("../../models");
 const service = async (req ,res) => {
     try {
        const where = {};
        if(req.params.id) {
            where.id = req.params.id;
        }
         const requestDB = await Quiz_Question.findAll({
             include: { 
                attributes: ["id","answer"],
                model : Quiz_answer,
            },
               where,
         });
         return res.json({
                msg: "Classes retrieved successfully",
                data: requestDB,
         })
     } catch (error) {
         return res.status(500).json({
             msg: error.toString(),
            
         })
     }
 }

 module.exports = { service }