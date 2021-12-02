import { Add } from "@mui/icons-material";
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";

const AddContainer = styled(Container)(({ theme }) => ({
  width: 500,
  height: 550,
  color: "#333",
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",

  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "100vh",
  },
}));

const MyForm = styled("form")(({ theme }) => ({
  autoComplete: "off",
  padding: theme.spacing(2),
}));

const Mydiv = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />;
});

function AddPosts(props) {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" sx={{ position: "fixed", bottom: 20, right: 20 }}>
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <AddContainer>
          <MyForm>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              size="small"
              sx={{ width: "100%", mb: 2 }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue="Tell your Story"
              size="small"
              sx={{ width: "100%", mb: 2 }}
              variant="outlined"
            />
            <Mydiv>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </Mydiv>

            <Mydiv>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (premium)"
                />
              </RadioGroup>
            </Mydiv>

            <Mydiv sx={{ mb: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ mr: 1 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Mydiv>
          </MyForm>
        </AddContainer>
      </Modal>

      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddPosts;
