import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';
import { BrowserRouter } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

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
