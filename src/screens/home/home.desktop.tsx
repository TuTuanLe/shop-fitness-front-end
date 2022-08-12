import React, {ReactElement} from 'react';
import { HomeController } from './home.controller';

interface LoginProps{
    id?:string
}

const HomeForDesktop = (props:LoginProps) : ReactElement =>{
    return(
        <div>Home</div>
    );
}


export const Login = HomeController(HomeForDesktop);