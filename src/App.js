import { Button } from "@mui/material";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";

const MyButton = styled(Button)({
  color: "white",
  backgroundColor: "black",
});

function App() {
  return (
    <div>
      <MyButton variant="contained" color="error" startIcon={<DeleteIcon />}>
        Material ui
      </MyButton>
    </div>
  );
}

export default App;
