const { Sessions, Materials } = require('../../models');
const service = async (req,res) => {
    try {
        const where = {};
        if(req.params.id) {
            where.id = req.params.id;
        }
        const requestDB = await Sessions.findAll({
            include: {
                model: Materials,
            },
            where,
        });
        return res.json({
            msg: "Session Read successfully",
            data: requestDB,
        })
    } catch(error) {
        return res.status(500).json({
            msg: error.toString()
        })
    }
}

module.exports = { service }