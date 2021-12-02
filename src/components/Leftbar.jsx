import { Home } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React from "react";

const itemContainer = styled("div")(({ theme }) => {});
function Leftbar(props) {
  return (
    <Container>
      <itemContainer>
        <Home />
        <Typography>Homepage</Typography>
      </itemContainer>
      <itemContainer>
        <Home />
        <Typography>Homepage</Typography>
      </itemContainer>
      <itemContainer>
        <Home />
        <Typography>Homepage</Typography>
      </itemContainer>
      <itemContainer>
        <Home />
        <Typography>Homepage</Typography>
      </itemContainer>
      <itemContainer>
        <Home />
        <Typography>Homepage</Typography>
      </itemContainer>
      <itemContainer>
        <Home />
        <Typography>Homepage</Typography>
      </itemContainer>
      <itemContainer>
        <Home />
        <Typography>Homepage</Typography>
      </itemContainer>
      <itemContainer>
        <Home />
        <Typography>Homepage</Typography>
      </itemContainer>
    </Container>
  );
}

export default Leftbar;
