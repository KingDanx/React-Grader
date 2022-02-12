const { Test, validateTest, testSchema } = require("../models/test");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Temperature = require("temperature-js");
const Unitz = require("unitz");

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
  let answer =  Math.round(Temperature[`${inputUnit}To${firstLetterUppercase}`](inputNumber) * 10) / 10;
  return answer.toString();
}

console.log(tempConverstion(`kelvin`, `celcius`, 9.26));

const volumeConversion = (inputNumber, inputUnit, outputUnit) => {
  let answer = Math.round(Unitz.parse(`${inputNumber} ${inputUnit}`).convert(`${outputUnit}`) * 10) / 10;
  return answer.toString();
}

console.log(volumeConversion(`2`, `litres`, `cup`));

router.put('/gradeTest/:testId', async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId);
    //set correct equal to an empty array
    //iterate over number of test questions
    //compare outputNumber to tempConversion(outputNumber)
    //if equal to eachother push true, else push false
    let temps = ['kelvin', 'fahrenheit', 'celsius', 'rankine'];
    let volumes = ['liters', 'cubic inches', 'cups', 'tablespoons', 'cubic feet', 'gallons'];
    test.correct = [];
    test.outputNumber.map((el, i) => {
      if(temps.some((so)=> so === el) === true){
        el === tempConverstion(test.inputUnit[i], el, test.outputNumber[i]) ? test.correct.push(true) : test.correct.push(false);
      }
      else {

      }
        
    })


    test.outputNumber = req.body.outputNumber;

    await test.save();
    return res.send(test);
  }
  catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
