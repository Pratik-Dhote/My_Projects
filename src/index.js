import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ProductCategories from './ProductCategories';
import About from './About';
import Gallery from './Gallery';
import Catalogue from './Catalogue';


let allRoutes=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/categories',
    element:<ProductCategories/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/gallery',
    element:<Gallery></Gallery>
  },
  {
    path:'/catalouge',
    element:<Catalogue/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
