import React, {ReactElement} from "react";
// import { Container } from "./styles";
import styled from "styled-components";

const HomePage = (): ReactElement => {
    return(
        <Container>
            <h1>hello</h1>
        </Container>
    )
}

export default HomePage;


export const Container = styled.div`
`;


export const Logo = styled.img`
    width: 6em;
    border:1px solid #131A22;
    padding: .2em .1em;
    cursor:pointer;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`