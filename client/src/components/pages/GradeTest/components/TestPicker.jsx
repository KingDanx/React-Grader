import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import '../styles/TestPicker.css';

const TestPicker = ({ test, setTest, allTests, getATest }) => {
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState("");

  const handleClose = (test) => {
    getATest(test);
    setFormValue('');
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
      <h2>Tests:</h2>

      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Select Test
          </InputLabel>
          <Select
            labelId="SelectTest"
            label="Select Test"
            open={open}
            onOpen={() => handleOpen()}
          >
            <TextField
              id="input-with-icon-textfield"
              onChange={(event) => handleChange(event)}
              autoComplete={'disabled'}
              name="searchTests"
              label="Search"
              onClick={() => handleOpen()}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            {allTests.map((el, index) =>
              !formValue.searchTests || formValue.searchTests === '' ? (
                <MenuItem
                  value={el.testName}
                  key={index}
                  onClick={() => handleClose(el._id)}
                  disabled
                >
                  <b>{el.testName}</b>
                </MenuItem>
              ) : el.testName.includes(formValue.searchTests) ? (
                <MenuItem
                  value={el.testName}
                  key={index}
                  onClick={() => handleClose(el._id)}
                  disabled
                >
                  <b>{el.testName}</b>
                </MenuItem>
              ) : null
            )}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default TestPicker;
