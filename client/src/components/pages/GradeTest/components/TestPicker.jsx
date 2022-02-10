import React, { useState, useEffect } from "react";

const TestPicker = ({ allTests, getATest }) => {
  return (
    <div>
        <h2>Tests:</h2>
      {allTests.map((el, index) => (
        <div key={index} onClick={() => getATest(el._id)}>
          <b>{el.testName} </b>
        </div>
      ))}
    </div>
  );
};

export default TestPicker;
