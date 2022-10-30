import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Router>
                <App />
            </Router>
        </GlobalStyles>
    </React.StrictMode>,
);

reportWebVitals();
