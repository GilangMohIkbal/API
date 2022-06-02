const { Materials } = require('../../models');

const service = async (req, res) => {
    try {
        const payload = req.body;
        payload.file = req.file.path;
        
        // console.log(req.files.path)
        
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