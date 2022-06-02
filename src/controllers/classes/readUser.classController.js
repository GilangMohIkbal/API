const { Users,join } = require('../../models');

service = async (req, res) => {
    try {
        console.log(req.params.id)
         const requestDB = await Users.findAll({
             
             include: {
                 model:join,
                    where: {
                        class_id: req.params.id
                    }
             }
             
         });
         console.log(JSON.stringify(requestDB))
         return res.json({
             msg: "Users ditemukan",
                data: requestDB
         })
    } catch (error) {
        return res.status(500).json({
            message: error.toString(),
        })
    }
}

module.exports = { service }