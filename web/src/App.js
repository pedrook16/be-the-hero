import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from './styles/Global';
import Router from '~/routes/routes';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={6000} />
      <GlobalStyled />
      <Router />
    </div>
  );
}

export default App;
