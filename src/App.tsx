import { makeStyles, CssBaseline, AppBar } from "@material-ui/core";
import React from "react";
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import clsx from "clsx"
import { MiniDrawer, HeadToolBar } from "./components/templates";
import { routerPage } from "./pages";
import { openMenuDrawer, closeMenuDrawer } from "@src/store/modules/view"
import { logoutSuccess } from "@src/store/modules/user"

import { connect } from 'react-redux';

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

function App(props: any) {
  const classes = useStyles();
  const state = useSelector(state => state);
  const { isOpenDrawer, logoutSuccess, userInfo } = props
  console.log(state)
  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: isOpenDrawer,
          })}
        >
          <HeadToolBar
            closeMenuDrawer={props.closeMenuDrawer}
            openMenuDrawer={props.openMenuDrawer}
            isOpenDrawer={isOpenDrawer}
            logout={logoutSuccess}
            userInfo={userInfo}
          ></HeadToolBar>
        </AppBar>
        <MiniDrawer
          onClose={props.closeMenuDrawer}
          open={isOpenDrawer}
        />
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


function mapStateToProps(state: any) {
  const {
    viewReducer: { isOpenDrawer },
    userReducer: userInfo,
  } = state;
  return { isOpenDrawer, userInfo };
}
function mapDispatchToProps(dispatch: any) {
  return {
    openMenuDrawer: () => dispatch(openMenuDrawer()),
    closeMenuDrawer: () => dispatch(closeMenuDrawer()),
    logoutSuccess: () => dispatch(logoutSuccess()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
