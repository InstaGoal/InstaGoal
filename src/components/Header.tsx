"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Logo from "./Logo";
import { Stack } from "@mui/material";
import TemplateList from "./TemplateList";

export default function Header() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
          <Logo />

          <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <TemplateList />
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            sx={{
              "& .MuiPaper-root": {
                width: "60%",
              },
            }}
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                p: 2,
                height: 1,
              }}
            >
              <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>

              <Stack direction="column" gap={2}>
                <Divider />
                <Typography
                  textAlign="center"
                  textTransform="uppercase"
                  fontWeight={800}
                  color="#6D6D6D"
                >
                  Templates
                </Typography>
                <Divider />
              </Stack>

              <Box sx={{ mb: 2 }}>
                <TemplateList />
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
