import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './components';
import { StoreProvider } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StoreProvider>
            <GlobalStyles>
                <Router>
                    <App />
                </Router>
            </GlobalStyles>
        </StoreProvider>
    </React.StrictMode>,
);

reportWebVitals();
