import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import { Provider } from 'react-redux';
import store from "./pages/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>

 <BrowserRouter>
    <App />
    
  </BrowserRouter>
  </Provider>

    

);

reportWebVitals();
