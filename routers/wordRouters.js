const express = require("express")
const router = express.Router();

const { getWord } = require("../controllers/wordControllers")


router.get("/:word", getWord)


module.exports = router;