const { Users } = require("../../models")
const service = async (req, res) => {
    // me user
    try {
        const user = await Users.findOne({
            where: {
                id: req.auth.user.id
            },
            attributes : {
                exclude : ["password"]
            }
        })
        if(!user) 
            return res.status(404).json({
                msg: "User not found"
            })
            return res.json({
                msg: "User Found",
                data: user
            })
        
    } catch (error) {
        return res.status(500).json({
            msg: error.toString(),
        })
    }
}

module.exports = { service }