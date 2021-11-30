import { Button } from "@mui/material";
import { styled } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const MyButton = styled(Button)({
  color: "white",
  backgroundColor: "#212121",

  "&:hover": {
    backgroundColor: "#616161",
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
