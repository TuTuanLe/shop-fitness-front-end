import React, { ComponentType } from "react";

export const HomeController = <P,>(Component : ComponentType<P>,) : ComponentType<P> =>{
    return (props : P) =>{
        return <Component {...props} />
    }
}