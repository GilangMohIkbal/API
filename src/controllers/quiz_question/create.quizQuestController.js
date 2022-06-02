const {Quiz_Question} = require('../../models');

const service = async (req,res) => {
    try {
        const payload = req.body;
        const requestDB = await Quiz_Question.create(payload);
        return res.json({
            msg: "Question created succesfully",
            data: requestDB
        })
    } catch (error) {
        return res.status(500).json({
            message: error.toString(),
        })
    }
}

module.exports = { service }