const { Test, validateTest, testSchema } = require("../models/test");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//Create a new Test
router.post("/createTest", async (req, res) => {
  try {
    const { error } = validateTest(req.body);
    if (error) return res.status(400).send(error.details[0].message);
      const test = new Test({
      testName: req.body.testName,
      inputNumber: req.body.inputNumber,
      inputUnit: req.body.inputUnit,
      outputUnit: req.body.outputUnit,
      correct: req.body.correct,
      studentGrade: req.body.studentGrade,
    });

    await test.save();
    return res.send(test);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
