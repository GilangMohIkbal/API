const { Classes } = require("../../models");
const service = async (req,res) => {
    try {
        // select all
        const where = {};
        if(req.params.id) {
            where.id = req.params.id;
        }

        // const page = Number(req.query.page) || 1;
        // const limit = Number(req.query.limit) || 3;
        const requestDB = await Classes.findAll({
            where: where,
            // limit,
            // offset:(page-1)*limit,
            order: [['createdAt','DESC']]
        }); 
        return res.json({
            msg: "Classes retrieved Successfully",
            data: requestDB
        }) 
    } catch (error) {
        return res.status(500).json({
            msg: error.toString(),
        })
    } 
}

module.exports = { service }