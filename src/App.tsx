import React from 'react';

import Header from './components/Header';
import Board from './pages/Board';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyles />
    </>
  );
}

export default App;
