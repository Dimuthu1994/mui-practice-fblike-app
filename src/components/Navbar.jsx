import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Cancel, Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const MyToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const MySearchbar = styled("div")(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",

  borderRadius: theme.shape.borderRadius,
  width: "50%",
  backgroundColor: "#f3f6f9f0",
  "&:hover": {
    backgroundColor: "#f0f3f7ef",
  },
  [theme.breakpoints.down("sm")]: {
    display: open ? "flex" : "none",
    width: "70%",
  },
}));

const MyIcons = styled("div")(({ theme, open }) => ({
  alignItems: "center",

  display: open ? "none" : "flex",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const MyIconContainer = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 1),
  width: "40px",
  height: "40px",
  borderRadius: "100%",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
}));

function Navbar(props) {
  const [open, setOpen] = useState(false);
  return (
    <AppBar sx={{ bgcolor: "background.paper", boxShadow: 1 }}>
      <MyToolbar>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            fontWeight: "bold",
            color: "primary.main",
          }}
          variant="h6"
        >
          dimbook
        </Typography>
        <Typography
          sx={{
            display: { xs: "block", sm: "none" },
            fontWeight: "bold",
            color: "primary.main",
          }}
          variant="h6"
        >
          <MyIconContainer>d</MyIconContainer>
        </Typography>

        <MySearchbar open={open}>
          <Search sx={{ color: "primary.main" }} />
          <InputBase
            placeholder="Search…"
            sx={{ marginLeft: 1, width: "100%" }}
          />
          <Cancel
            onClick={() => setOpen(false)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          />
        </MySearchbar>

        <MyIcons open={open}>
          <Search
            sx={{
              color: "primary.main",
              display: { xs: "flex", sm: "none" },
            }}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="error" sx={{ marginLeft: 1 }}>
            <MailIcon color="info" />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{ marginLeft: 1 }}>
            <NotificationsIcon color="info" />
          </Badge>
          <Avatar
            sx={{ marginLeft: 2 }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          />
        </MyIcons>
      </MyToolbar>
    </AppBar>
  );
}

export default Navbar;
