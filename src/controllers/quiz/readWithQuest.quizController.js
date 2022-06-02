const { Quiz, Quiz_Question } = require("../../models");
 const service = async (req ,res) => {
     try {
        const where = {};
        if(req.params.id) {
            where.id = req.params.id;
        }
         const requestDB = await Quiz.findAll({
             include: { 
                attributes: ["id","question"],
                model : Quiz_Question,
            },
               where,
         });
         return res.json({
                msg: "Quiz retrieved successfully",
                data: requestDB,
         })
     } catch (error) {
         return res.status(500).json({
             msg: error.toString(),
            
         })
     }
 }

 module.exports = { service }