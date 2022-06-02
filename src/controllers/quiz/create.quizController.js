const {Quiz} = require('../../models');

const service = async (req,res) => {
    try {
        const payload = req.body;
        const requestDB = await Quiz.create(payload);
        return res.json({
            msg: "Quiz created succesfully",
            data: requestDB
        })
    } catch (error) {
        return res.status(500).json({
            message: error.toString(),
        })
    }
}

module.exports = { service }