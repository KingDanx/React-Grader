import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Autocomplete from '@mui/material/Autocomplete';
import "../styles/TestPicker.css";

const TestPicker = ({ test, setTest, allTests, getATest }) => {
  const [formValue, setFormValue] = React.useState("");

  const searchData = []
  
  allTests.map((el)=> searchData.push({
    label: el.testName,
    _id: el._id,
  }))

  const handleClick = (event, test) => {
    getATest(test);
    setFormValue("");
  };

  const handleChange = (event) => {
    event.preventDefault();
    event.persist();
    setFormValue((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <div>
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
