import {
  MyBookmark,
  MyExitToApp,
  MyHome,
  MyPerson,
  MyPhotoCamera,
  MyPlayCircleFilledOutlined,
  MySettings,
  MyStorefront,
  MyTabletMac,
  MyList,
} from "./icons/Icons";
import { Container, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React from "react";

const MyContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  color: "#fff",
  paddingTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,

  [theme.breakpoints.up("sm")]: {
    backgroundColor: "#fff",
    border: "1px solid #ece7e7",
  },
}));

const ItemContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  marginBottom: theme.spacing(4),

  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(3),
    justifyContent: "start",
  },
}));

const MyTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  color: "#333",
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

function Leftbar(props) {
  return (
    <MyContainer>
      <ItemContainer>
        <MyHome />
        <MyTypography>Homepage</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MyPerson />
        <MyTypography>Friends</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MyList />
        <MyTypography>Lists</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MyPhotoCamera />
        <MyTypography>Camera</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MyPlayCircleFilledOutlined />
        <MyTypography>Videos</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MyTabletMac />
        <MyTypography>Apps</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MyBookmark />
        <MyTypography>Collections</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MyStorefront />
        <MyTypography>Market</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MySettings />
        <MyTypography>Settings</MyTypography>
      </ItemContainer>
      <ItemContainer>
        <MyExitToApp />
        <MyTypography>Logout</MyTypography>
      </ItemContainer>
    </MyContainer>
  );
}

export default Leftbar;
