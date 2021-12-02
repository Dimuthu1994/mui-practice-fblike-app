import { Grid } from "@mui/material";
import Feeds from "./components/Feeds";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2.5} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={6.5} xs={10}>
          <Feeds />
        </Grid>
        <Grid item sm={3} sx={{ display: { xs: "none", sm: "flex" } }}>
          <Rightbar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
