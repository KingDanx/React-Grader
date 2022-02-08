const mongoose = require('mongoose');
const Joi = require('joi');

const testSchema = new mongoose.Schema({
    inputNumber: [{ type: Number, minlength: 1 }],
    inputType: [{ type: String }],
    inputCorrect: [{ type: Boolean }],
    studentGrade: { type: Number },
  });
  
  const Test = mongoose.model('Test', testSchema);
  
  const validateTest = (test) => {
    const schema = Joi.object({
        inputNumber: Joi.array(),
        inputType: Joi.array(),
        inputCorrect: Joi.array(),
        studentGrade: Joi.number(),
    })
    return schema.validate(test)
  }

exports.Test = Test
exports.validateTest = validateTest
exports.testSchema = testSchema