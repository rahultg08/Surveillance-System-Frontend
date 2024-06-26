import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
import  ThemeContext  from "./context/ThemeContext"; 



ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <SimpleReactLightbox>
                <BrowserRouter basename='/'>
                    <ThemeContext>
                        <App />
                    </ThemeContext>  
                 { /*   <App /> */  }
                </BrowserRouter>    
            </SimpleReactLightbox>
        </Provider>	
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
// eslint-disable-next-line