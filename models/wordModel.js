const { Schema, model } = require("mongoose");

const WordSchema = new Schema({
    word: {
        type: String
    },
})

module.exports = model("Word", WordSchema);