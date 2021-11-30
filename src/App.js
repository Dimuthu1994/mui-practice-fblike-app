import { Button } from "@mui/material";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { purple } from "@mui/material/colors";
const MyButton = styled(Button)({
  color: "white",
  backgroundColor: purple[800],

  "&:hover": {
    backgroundColor: purple[500],
  },
});

function App() {
  return (
    <div>
      <MyButton variant="contained" startIcon={<DeleteIcon />}>
        Material ui
      </MyButton>
    </div>
  );
}

export default App;
