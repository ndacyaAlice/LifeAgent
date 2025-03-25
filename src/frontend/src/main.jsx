import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from 'react-redux';
import  { Contract } from "./utils/icp";
import { ToastContainer } from "react-toastify";
import store from '../src/Redux/store/store';
import App from "./App";
import "react-toastify/dist/ReactToastify.css";


window.renderICPromise = Contract().then(()=>{
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
        <Provider store={store}>
           <App/>
           <ToastContainer hideProgressBar/>
        </Provider>
        </React.StrictMode>
    );
}).catch(console.error);
