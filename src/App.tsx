import { makeStyles, CssBaseline, AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { MenuIcon } from "@material-ui/data-grid";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import clsx from "clsx"
import { MiniDrawer } from "./components/templates";
import { routerPage } from "./pages";

const goToLogin = () => (window.location.href = "/login");

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 16
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '64px',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  hide: {
    display: 'none'

  },
}));


export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Assignment
          </Typography>
            <Button color="inherit" onClick={() => goToLogin()}>
              Login
          </Button>
          </Toolbar>
        </AppBar>
        <MiniDrawer
          open={open}
          onClose={handleDrawerClose}
        ></MiniDrawer>
        <main className={classes.content}>
          <div className={classes.toolbar} >
            <Switch>
              {routerPage.map((item: any, index: number) => (
                <Route exact path={item.link} component={item.component} key={index} />
              ))}
            </Switch>
          </div>
        </main>
      </Router>
    </div>
  );
}
