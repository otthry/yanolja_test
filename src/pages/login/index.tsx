import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, makeStyles } from '@material-ui/core';
import { Title } from "@src/components/atoms";
import { connect } from 'react-redux';
import { loginSuccess, logoutSuccess } from '@src/store/modules/user'

const useStyles = makeStyles(() => ({
    login: {
        display: 'block'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
    },
    button: {
        marginTop: 10
    }
}));


type LoginProps = {
    children?: any;
    login: any;
    isLoggedIn: any;
};
type InputField = 'email' | 'password' | 'text';
const Login = (props: LoginProps) => {

    useEffect(() => {
        if (props.isLoggedIn)
            history.push('/')
    })


    const classes = useStyles();
    const history = useHistory();
    const ErrorMsg = {
        required: function (type: string) { return type + ' is required' },
        vaild: 'Email is not a valid email',
        tooshort: 'Password is too short (minimum is 8 characters)'
    }
    const emailValidated = {
        regex: /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    }
    const passwordValidated = {
        minlength: 7
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')

    const handleInputChange = (e: any, type: InputField) => {
        const value = e.target.value;
        if (type === 'email') {
            setEmail(value)
            setEmailErr(emailValidated.regex.test(value) ? '' : ErrorMsg.vaild)
        }
        if (type === 'password') {
            setPassword(value)
            setPasswordErr(value.length > passwordValidated.minlength ? '' : ErrorMsg.tooshort)
        }
    }
    const handleLoginSubmit = () => {
        let flag = true;
        if (emailErr !== '' || passwordErr !== '') {
            return false;
        }
        if (email === '') {
            setEmailErr(ErrorMsg.required('Email'))
            flag = false;
        }
        if (password === '') {
            setPasswordErr(ErrorMsg.required('Password'))
            flag = false;
        }

        if (!flag)
            return false;


        props.login(email, password);

    }

    return (
        <div className={classes.login}>
            <Title headtitle={1}>Login</Title>
            <form className={classes.form}>
                <TextField id="outlined-basic" label="email" fullWidth={true} margin="normal" error={emailErr !== '' ? true : false}
                    helperText={emailErr} onChange={(e) => { handleInputChange(e, 'email') }} variant="outlined" />
                <TextField id="outlined-basic" type="password" fullWidth={true} label="password" error={passwordErr !== '' ? true : false} onChange={(e) => { handleInputChange(e, 'password') }} helperText={passwordErr} variant="outlined" />
                <Button className={classes.button}
                    variant="contained"
                    color="inherit"
                    onClick={handleLoginSubmit}
                >Send</Button>
            </form>
        </div>
    );
}

Login.defaultProps = {};
function mapStateToProps(state: any) {
    const {
        userReducer: { isLoggedIn },
    } = state;
    return { isLoggedIn };
}
function mapDispatchToProps(dispatch: any) {
    return {
        login: (email: string, password: string) =>
            dispatch(loginSuccess({ email: email, password: password })),
        logoutSuccess: () => dispatch(logoutSuccess()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)