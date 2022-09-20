#!/usr/bin/env node

// console.log("hi");

const { bmiCalculator } = require('./bmi');
console.log("John:"+bmiCalculator(92,1.95));
console.log("Mark:"+bmiCalculator(78,1.69));
console.log("JohnB:"+bmiCalculator(95,1.88));
console.log("MarkB:"+bmiCalculator(85,1.76));
