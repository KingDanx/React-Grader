import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import "../styles/TestPicker.css";

const TestPicker = ({ test, setTest, allTests, getATest }) => {

  const searchData = []
  
  allTests.map((el)=> searchData.push({
    label: el.testName,
    _id: el._id,
  }))

  const handleClick = (event, test) => {
    getATest(test);
  };

  return (
    <div>
      <div className="test-picker-center">
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={searchData}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search Tests" />}
      onChange={(event, value)=>handleClick(event.target, value._id)}
    />
      </div>
    </div>
  );
};

export default TestPicker;
