import React from 'react';
import { GlobalStyle } from '../../styles/globalStyled';
import { Header } from "../../components/Header/Header";
import { Discussion } from "../../components/Discussion/Discussion";
import "./home-style.css";

export const Home = () => {

    return (
        <>
            <GlobalStyle />
            <Header />
            <Discussion />
        </>
    );
}; 