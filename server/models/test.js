const mongoose = require('mongoose');
const Joi = require('joi');

const testSchema = new mongoose.Schema({
    testName: { type: String, required: true },
    inputNumber: [{ type: Number, minlength: 1 }],
    inputUnit: [{ type: String }],
    correct: [{ type: Boolean }],
    outputUnit: [{ type: String }],
    studentGrade: { type: Number },
  });
  
  const Test = mongoose.model('Test', testSchema);
  
  const validateTest = (test) => {
    const schema = Joi.object({
        testName: Joi.string().required(),
        inputNumber: Joi.array(),
        inputUnit: Joi.array(),
        correct: Joi.array(),
        outputUnit: Joi.array(),
        studentGrade: Joi.number(),
    })
    return schema.validate(test)
  }

exports.Test = Test
exports.validateTest = validateTest
exports.testSchema = testSchema