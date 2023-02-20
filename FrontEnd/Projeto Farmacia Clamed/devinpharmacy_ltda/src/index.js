import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './rotas/Rotas';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas>
      <App />
    </Rotas>

  </React.StrictMode>
);
reportWebVitals();
