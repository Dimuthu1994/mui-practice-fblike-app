import { Container } from "@mui/material";
import React from "react";
import Post from "./Posts";

function Feeds(props) {
  return (
    <Container
      sx={{
        pt: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feeds;
