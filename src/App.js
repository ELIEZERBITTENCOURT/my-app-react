import React from 'react';
import { GlobalStyle, } from './styles/globalStyled';
import { Header } from "./components/Header/Header";
import { Discussion } from './components/Discussion/Discussion';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Discussion></Discussion>
    </>
  );
};

export default App;
