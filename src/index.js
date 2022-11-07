import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './app/store';
import ToggleColorModelProvider from './utils/ToggleColorMode';

// const theme = createTheme({});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleColorModelProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ToggleColorModelProvider>,
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
