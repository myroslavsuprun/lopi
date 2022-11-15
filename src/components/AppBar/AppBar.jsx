import {
  AppBar as AppBarStyled,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

const AppBar = () => {
  return (
    <>
      <AppBarStyled position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOPI
          </Typography>
          <Button color="inherit">
            <Link
              component={LinkRouter}
              to="users/login"
              color="inherit"
              underline="none"
            >
              Somewhere
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              component={LinkRouter}
              to="users/login"
              color="inherit"
              underline="none"
            >
              Somewhere
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              component={LinkRouter}
              to="users/login"
              color="inherit"
              underline="none"
            >
              Somewhere
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              component={LinkRouter}
              to="users/login"
              color="inherit"
              underline="none"
            >
              Log in
            </Link>
          </Button>
        </Toolbar>
      </AppBarStyled>
      <div style={{ height: "64px" }}></div>
    </>
  );
};

export default AppBar;
