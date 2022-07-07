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
import { CopyToClipboard } from "react-copy-to-clipboard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Bulk.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function Bulk() {
  const [messagePdf, setMessagePdf] = useState("");
  const [pdfFilesExist, setPdfFilesExist] = useState(false);

  const [messageCsv, setMessageCsv] = useState("");
  const [csvFilesExist, setCsvFilesExist] = useState(false);

  const pdfFilesValidation = () => {
    if (messagePdf.length > 0) {
      setPdfFilesExist(true);
    } else {
      setPdfFilesExist(false);
    }
  };

  const csvFilesValidation = () => {
    if (messageCsv.length > 0) {
      setCsvFilesExist(true);
    } else {
      setCsvFilesExist(false);
    }
  };

  const handleMessageChangePDF = (event) => {
    // 👇️ access textarea value
    setMessagePdf(event.target.value);
  };

  const handleMessageChangeCSV = (event) => {
    // 👇️ access textarea value

    setMessageCsv(event.target.value);
  };

  const handleStringToArrayPDF = () => {
    const messagePdfArray = messagePdf.split("\n");
    return messagePdfArray;
  };

  const handleStringToArrayCSV = () => {
    const messageCsvArray = messageCsv.split("\n");
    return messageCsvArray;
  };

  let formatDataPDF = handleStringToArrayPDF();
  let formatDataCSV = handleStringToArrayCSV();

  const formatDataPDFTest = () => {
    const djole = formatDataPDF.map((arr) => {
      return `"${arr}-$datum-*.pdf"`;
    });
    return djole;
  };

  const formatDataCSVTest = () => {
    const djole = formatDataCSV.map((arr) => {
      if (csvFilesExist) {
        return `"${arr}-$datum-*.csv"`;
      } else {
        return "";
      }
    });

    return djole;
  };

  let arrayOfReportsPdf = formatDataPDFTest();
  let arrayOfReportsCsv = formatDataCSVTest();

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        style={{ textAlign: "center" }}
      >
        Bulk Add
      </Typography>
      <Box sx={{ flexGrow: 1 }} className="container">
        <Grid container spacing={2}>
          <Grid item xs={6} className="grid-item">
            <div className="item-containter">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={22}
                id="message"
                name="message"
                value={messageCsv}
                onChange={handleMessageChangeCSV}
                placeholder="Paste reports CSV here..."
                style={{ width: 250 }}
              />
              <Button
                onClick={csvFilesValidation}
                variant="contained"
                style={{ marginTop: "2rem", marginBottom: "0.5rem" }}
                /* disabled={messageCsv ? false : true} */
              >
                Update row .CSV
              </Button>
              <Typography variant="button" gutterBottom>
                {csvFilesExist
                  ? ` Number of CSV reports is : ${formatDataCSV.length}`
                  : ""}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} className="grid-item">
            <div className="item-containter">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={22}
                id="message"
                name="message"
                value={messagePdf}
                onChange={handleMessageChangePDF}
                placeholder="Paste PDF reports here..."
                style={{ width: 250 }}
              />
              <Button
                onClick={pdfFilesValidation}
                variant="contained"
                style={{ marginTop: "2rem", marginBottom: "0.5rem" }}

                /* disabled={messagePdf ? false : true} */
              >
                Update row .PDF
              </Button>
              <Typography variant="button" gutterBottom>
                {pdfFilesExist
                  ? ` Number of PDF reports is : ${formatDataPDF.length}`
                  : ""}
              </Typography>
              {/* <Button
                onClick={() => console.log(csvFilesExist, messageCsv.length)}
                variant="contained"
                style={{ marginTop: "2rem" }}
              >
                test
              </Button> */}
            </div>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          {`$IncludeFiles =  (${csvFilesExist ? arrayOfReportsCsv : ""}${
            csvFilesExist ? "," : ""
          }${pdfFilesExist ? arrayOfReportsPdf : ""})`}
        </Typography>
      </Box>
    </>
  );
}

export default Bulk;
