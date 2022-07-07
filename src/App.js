import Button from "@mui/material/Button";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [myArray, setMyArray] = useState([]);

  const [comma, setComma] = useState("");

  const addValueToArray = () => {
    myArray.push(value);
    /* setMyArray((arr) => [...arr, myArray]); */
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // select extension

  const [extension, setExtension] = React.useState(".pdf");

  const [value, setValue] = React.useState(``);

  const handleChange = (event) => {
    setExtension(event.target.value);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  /* const addItemToArray = () => {
    setMyArray(oldArray => [...oldArray, newElement]);
  } */

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        style={{ textAlign: "center" }}
      >
        One by one
      </Typography>
      <div className="container" style={{ marginBottom: "20px" }}>
        {/*  <div className="App">
        <h1>Clipboard Copy</h1>
        <CopyToClipboard text="ovo se kopira" onCopy={() => alert("Copied")}>
          <button>Copy to clipboard with span</button>
        </CopyToClipboard>
      </div> */}
        <div className="buttonContainer">
          <Button onClick={handleOpen} variant="contained">
            Add Report
          </Button>
        </div>
        <div className="textContainer">
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            style={{ textAlign: "center", marginTop: "150px" }}
          >
            {/* {`$IncludeFiles = ("${myArray.map(arr => )}-$datum-*${extension})"`} */}
            {`$IncludeFiles =  (${myArray.map((arr, index) => {
              return `"${arr}-$datum-*${extension}"`;
            })})`}
          </Typography>
        </div>
        <div className="modal">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                component="div"
                gutterBottom
                style={{ textAlign: "center", marginBottom: "50px" }}
              >
                Add report
              </Typography>
              <TextField
                onChange={handleValue}
                id="outlined-basic"
                label="Report Name"
                variant="outlined"
              />

              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ width: "100px" }}
                >
                  Extension
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={extension}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={".pdf"}>PDF</MenuItem>
                  <MenuItem value={".csv"}>CSV</MenuItem>
                </Select>
              </FormControl>
              <Button
                onClick={() => {
                  addValueToArray();
                  handleClose();
                  console.log("djole");
                }}
                variant="contained"
                size="large"
                style={{ marginLeft: "100px", height: "55px" }}
              >
                Add
              </Button>
            </Box>
          </Modal>
        </div>
        <Button /* onClick={}  */ variant="contained">Copy</Button>
      </div>
    </>
  );
}

export default App;
