import React, {ReactElement} from 'react';
import { LoginController } from './login.controller';

interface LoginProps{
    id?:string
}

const LoginForDesktop = (props:LoginProps) : ReactElement =>{
    return(
        <div>hello world</div>
    );
}


export const Login = LoginController(LoginForDesktop);