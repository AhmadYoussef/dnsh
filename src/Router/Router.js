import React from 'react';
import { Switch , Route } from "react-router-dom";
import Home from '../Components/Home/Home';
import ProductPage from '../Components/Products/ProductPage/ProductPage';
import Products from '../Components/Products/Products';
import ServicePage from '../Components/Services/ServicePage/ServicePage';
import Services from '../Components/Services/Services';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import NotFound from '../Components/NotFound/NotFound';


const Router = () =>{
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/:productName" component={ProductPage} />
            <Route path="/products" component={Products} />
            <Route path="/services/:serviceName" component={ServicePage} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Router