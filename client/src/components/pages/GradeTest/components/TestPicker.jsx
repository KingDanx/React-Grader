import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const TestPicker = ({ test, setTest, allTests, getATest }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (test) => {
    getATest(test);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setTest(event.target.value);
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
            onClose={()=>handleClose()}
          >
              <TextField
                id="input-with-icon-textfield"
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
            {allTests.map((el, index) => (
              <MenuItem value={el.testName} key={index} onClick={() => handleClose(el._id)}>
                <b>{el.testName} </b>
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>With label + helper text</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default TestPicker;
