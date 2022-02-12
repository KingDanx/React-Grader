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
  inputUnit == `celsius` ? inputUnit = 'celcius' : null; //npm creator can't spell nor can I
  outputUnit == `celsius` ? outputUnit = 'celcius' : null; //npm creator can't spell nor can I
  let firstLetterUppercase = outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1);
  let answer =  Math.round(Temperature[`${inputUnit}To${firstLetterUppercase}`](parseInt(inputNumber)) * 10) / 10;
  return answer.toString();
}

// console.log(tempConverstion(`kelvin`, `celsius`, 9.26));

const volumeConversion = (inputNumber, inputUnit, outputUnit) => {
  let answer;
  if( inputUnit == `cubic inches`){
    let gallons = Unitz.parse(`${inputNumber} ${inputUnit}`).convert(`gallons`)
    answer = Math.round(Unitz.parse(`${gallons} gallons`).convert(`${outputUnit}`) * 10) / 10;
    return answer.toString();
  }
  else if( inputUnit == `cubic feet`){
    let gallons = Unitz.parse(`${inputNumber} ${inputUnit}`).convert(`gallons`)
    answer = Math.round(Unitz.parse(`${gallons} gallons`).convert(`${outputUnit}`) * 10) / 10;
    return answer.toString();
  }
  else if(outputUnit == `cubic inches`){
    let gallons = Unitz.parse(`${inputNumber} ${inputUnit}`).convert(`gallons`)
    answer = Math.round(Unitz.parse(`${gallons} gallons`).convert(`${outputUnit}`) * 10) / 10;
    return answer.toString();
  }
  else if(outputUnit == `cubic feet`){
    let gallons = Unitz.parse(`${inputNumber} ${inputUnit}`).convert(`gallons`)
    answer = Math.round(Unitz.parse(`${gallons} gallons`).convert(`${outputUnit}`) * 10) / 10;
    return answer.toString();
  }
  else{
    answer = Math.round(Unitz.parse(`${inputNumber} ${inputUnit}`).convert(`${outputUnit}`) * 10) / 10;
    return answer.toString();
  }
  //Conditionals are nessissary because library does not account for cubic feet to liters. Therefore all cubic feet/inches must be first converted to gallons
}

router.put('/gradeTest/:testId', async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId);
    test.outputNumber = req.body.outputNumber;
    let temps = ['kelvin', 'fahrenheit', 'celsius', 'rankine'];
    let volumes = ['liters', 'cubic inches', 'cups', 'tablespoons', 'cubic feet', 'gallons'];
    test.correct = [];
    
    test.outputNumber.map((el, i) => {
      if(temps.some((so)=> so === test.inputUnit[i]) === true){
        el.toString() === tempConverstion(test.inputUnit[i], test.outputUnit[i], test.inputNumber[i]) ? test.correct.push(true) : test.correct.push(false);
      }
      else if (volumes.some((so) => so === test.inputUnit[i] ) === true ){
        el.toString() === volumeConversion(test.inputNumber[i], test.inputUnit[i], test.outputUnit[i]) ? test.correct.push(true) : test.correct.push(false);
      }
    })

    await test.save();
    return res.send(test);
  }
  catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
