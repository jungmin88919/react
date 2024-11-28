import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"; // Provider import
import store from "./redux/store"; // Redux store import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 환경에 따라 basename 설정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/react" future={{ v7_startTransition: true }}>
    <App />
  </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
