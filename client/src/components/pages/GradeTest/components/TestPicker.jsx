import React, { useState, useEffect } from "react";

const TestPicker = ({ allTests, getATest }) => {
  return (
    <div>
        <h2>Tests:</h2>
      {allTests.map((el, index) => (
        <div key={index} onClick={() => getATest(el._id)}>
          <b>{el.testName} </b>
          <div>
            {/* {el.inputNumber.map((li, i) => (
                <div key={i}>
                  Convert {li} {el.inputUnit[i]} to {el.outputUnit[i]}{" "}
                  <TextField
                    name={`studentInput${index}${i}`}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              ))} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestPicker;
