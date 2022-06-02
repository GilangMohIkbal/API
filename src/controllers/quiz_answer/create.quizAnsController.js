const {Quiz_answer} = require('../../models');

const service = async (req,res) => {
    try {
        const payload = req.body;
        const requestDB = await Quiz_answer.create(payload);
        return res.json({
            msg: "answer created succesfully",
            data: requestDB
        })
    } catch (error) {
        return res.status(500).json({
            message: error.toString(),
        })
    }
}

module.exports = { service }