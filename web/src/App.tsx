import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
