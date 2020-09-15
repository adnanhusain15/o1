import React from "react";
import ScrollTop from "../../Components/ScrollTop";

// CSS styling
import AppBarStyles, { AppbarTheme } from "../../Styles/AppBarStyles";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Fab,
  ThemeProvider,
} from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Form from "./Form.js";
import ViewPlacements from "./ViewPlacements";

function Placement(props) {
  // Styling for elements
  const AppBarStyle = AppBarStyles();

  return (
    <>
      {/* Top Navbar */}
      <ThemeProvider theme={AppbarTheme}>
        <div className={AppBarStyle.root}>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h5" className={AppBarStyle.title}>
                Placements
              </Typography>

              <Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign Up</Button>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>

      <Container
        fixed
        style={{ marginTop: "3%", marginBottom: "3%" }}
        id="back-to-top-anchor"
      >
        <Typography className={AppBarStyle.title}>
          <Form />
        </Typography>
      </Container>

      <Container fixed>
        <Typography gutterBottom variant="h4">
          This is the page where placements of all users are displayed
        </Typography>
      </Container>

      {/* Display Blogs */}
      <ViewPlacements />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Placement;
