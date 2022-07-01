const {Tugas_Kelas} = require('../../models');

const service = async (req,res) => {
    try {
        const payload = req.body;
        const requestDB = await Tugas_Kelas.create(payload);
        return res.json({
            msg: "Tugas created successfully",
            data: requestDB,
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.toString()
        })
    }
}