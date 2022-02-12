import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import useForm from "../../../../useForm";
import axios from "axios";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import "../styles/TestGrader.css";

const TestGrader = ({ test, setTest }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const gradeTest = async () => {
    await axios
      .put(`http://localhost:5000/api/tests/gradeTest/${test._id}`, {
        outputNumber: test.outputNumber.map(
          (el, i) => formValue[`question${i}`]
        ),
      })
      .then((res) => {
        setTest(res.data);
        setOpen(true);
        console.log(res);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  const { formValue, handleChange, handleSubmit, setFormValue } =
    useForm(gradeTest);

  useEffect(() => {
    setFormValue("");
  }, [test]);

  return (
    <div>
      {!test.inputNumber ? (
        <h2>{"Select a test to grade."}</h2>
      ) : (
        <h2>{`Grading ${test.testName}`}</h2>
      )}
      <div>
        {!test.inputNumber
          ? null
          : test.inputNumber.map((el, i) => (
              <div key={i}>
                Convert {el} <b>{test.inputUnit[i]}</b> to{" "}
                <b>{test.outputUnit[i]}</b>
                <TextField
                  onChange={(event) => handleChange(event)}
                  size="small"
                  name={`question${i}`}
                  value={
                    !formValue[`question${i}`] ? "" : formValue[`question${i}`]
                  }
                  error={
                    (formValue[`question${i + 1}`] &&
                      !formValue[`question${i}`]) ||
                    (isNaN(formValue[`question${i}`]) &&
                      formValue[`question${i}`])
                      ? true
                      : false
                  }
                  helperText={
                    isNaN(formValue[`question${i}`]) &&
                    formValue[`question${i}`]
                      ? `Input a Number`
                      : formValue[`question${i + 1}`] &&
                        !formValue[`question${i}`]
                      ? "Input a Number"
                      : null
                  }
                />
                {test.correct[i] === true ? " Correct" : " Incorrect"}
              </div>
            ))}
      </div>
      {!test.inputNumber ? null : (
        <Tooltip title={
          test.inputNumber.some(
            (so, i) =>
              formValue[`question${i}`] === "" ||
              !formValue[`question${i}`] ||
              isNaN(formValue[`question${i}`])
          ) === true
            ? "Please answer all questions."
            : "" }>
          <span>
          <Button
            disabled={
              test.inputNumber.some(
                (so, i) =>
                  formValue[`question${i}`] === "" ||
                  !formValue[`question${i}`] ||
                  isNaN(formValue[`question${i}`])
              ) === true
                ? true
                : false
            }
            variant="contained"
            onClick={(event) => handleSubmit(event)}
          >
            Grade Test
          </Button>
          </span>
        </Tooltip>
      )}
       <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Test Results for {test.testName}:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </div>
  );
};

export default TestGrader;
