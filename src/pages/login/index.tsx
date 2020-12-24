import React from "react";
import { Route } from "react-router-dom";

import { TextField,Button } from '@material-ui/core';
type LoginProps = {
    children?:any;
};

const Login = (props: LoginProps) =>{
    return (
        <form>
        <TextField id="outlined-basic" label="email" variant="outlined" />
                <TextField id="outlined-basic"  type="password" label="password" variant="outlined"/>
                <Button
                        type="submit"
                        variant="contained"
                        color="inherit"
                    >
                        Login
                    </Button>

         </form>
    );
  }
  
  Login.defaultProps = {};
  
  export default Login;