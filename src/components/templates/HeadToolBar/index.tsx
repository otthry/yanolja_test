
import * as React from 'react';
import clsx from "clsx"
import { Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';
import { MenuIcon } from '@material-ui/data-grid';
import { Button } from '@src/components/atoms';
type HeadToolBarProps = {
    children?: any;
    data?: any;
    openMenuDrawer?: any;
    closeMenuDrawer?: any;
    isOpenDrawer: boolean;
    userInfo?: any;
    logout?: any;
};

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 16
    },
    hide: {
        display: 'none'

    },
}));
const HeadToolBar = (props: HeadToolBarProps) => {

    const { userInfo } = props;

    const goToLogin = () => (window.location.href = "/login");
    const goToLogout = () => {
        props.logout();
        goToLogin();
    };

    const classes = useStyles();
    console.log(userInfo)
    const handleDrawerOpen = () => {
        props.openMenuDrawer();
    };
    return (
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                    [classes.hide]: props.isOpenDrawer,
                })}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Assignment</Typography>
            {!userInfo.isLoggedIn && (
                <Button label="Login" onClick={() => goToLogin()}> Login</Button>
            )}
            {userInfo.isLoggedIn && (
                <React.Fragment>
                    <Button label="Logout" onClick={() => goToLogout()}> Logout</Button>
                </React.Fragment>
            )}

        </Toolbar>
    );
};
HeadToolBar.defaultProps = {};

export default (HeadToolBar);