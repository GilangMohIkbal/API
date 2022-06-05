const { Materials } = require('../../models');

const service = async (req, res) => {
    try {
        const payload = req.body;
        payload.file = process.env.baseURL + req.files[0].originalname;
        // return res.json(req.files)
       
        // return res.json(payload)
        const requestDB = await Materials.create(payload);
        return res.json({
            msg: "Material created successfully",
            data: requestDB,
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.toString()
        })
    }
}

module.exports = { service }