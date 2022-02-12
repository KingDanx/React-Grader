const { Test, validateTest, testSchema } = require("../models/test");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Temperature = require("temperature-js");

//Create a new Test
router.post("/createTest", async (req, res) => {
  try {
    const { error } = validateTest(req.body);
    if (error) return res.status(400).send(error.details[0].message);
      const test = new Test({
      testName: req.body.testName,
      inputNumber: req.body.inputNumber,
      outputNumber: req.body.outputNumber,
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

router.get('/all', async (req, res) => {
  try {
    const test = await Test.find();
    return res.send(test);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.get('/:testId', async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId);
    return res.send(test);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});


const tempConverstion = (inputUnit, outputUnit, inputNumber) => {
  let firstLetterUppercase = outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1);
    return Temperature[`${inputUnit}To${firstLetterUppercase}`](inputNumber);
}

console.log(tempConverstion(`celcius`, `kelvin`, 10));

router.put('/gradeTest/:testId', async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId);
    
    test.outputNumber = req.body.outputNumber;

    await test.save();
    return res.send(test);
  }
  catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
