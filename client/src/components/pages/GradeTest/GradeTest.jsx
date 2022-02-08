import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ListSubheader from "@mui/material/ListSubheader";

const GradeTest = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      Grade Test
      <div>
        <TextField
          sx={{ m: 1, maxWidth: 120 }}
          error
          id="test-input"
          label="Number"
          name="test-input"
          type="text"
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-native-select">Input Units</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Units"
          >
            <option aria-label="None" value="" />
            <optgroup label="Temperature">
              <option value={1}>Kelvin</option>
              <option value={1}>Celsius</option>
              <option value={1}>Fahrenheit</option>
              <option value={1}>Rankine</option>
            </optgroup>
            <optgroup label="Volume">
              <option value={3}>Liters</option>
              <option value={3}>Tablespoons</option>
              <option value={3}>Cubic-Inches</option>
              <option value={3}>Cubic-Feet</option>
              <option value={3}>Cups</option>
              <option value={3}>Gallons</option>
            </optgroup>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default GradeTest;
