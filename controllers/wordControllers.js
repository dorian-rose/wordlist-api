const Word = require("../models/wordModel")


const getWord = async (req, res) => {
    const { word } = req.params;
    try {
        const words = await Word.find({ word });
        if (words.length == 0) {
            return res.status(404).json({
                ok: false,
                msg: "Word doesn't exist in list"
            });
        } else {
            return res.status(200).json({
                ok: true,
                msg: "Tareas encontradas",
                data: words
            })
        }
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error al buscar tareas de este usuario"
        });
    }
};



module.exports = { getWord };