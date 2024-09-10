import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// esta es la forma vieja que ya se debe cambiar porque funciona para react 17 y no el actual react 18
//ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//);