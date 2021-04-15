import React from 'react';
import { Router } from '@reach/router';
import Home from './Home/home';
import ProductDetails from './product-details/product-details';
import Bag from './bag/bag';
import OrderComplete from './order-complete/order-complete';

const Pages = () => {
    return(
        <Router>
            <Home path="/" />
            <ProductDetails path="/product-details" />
            <Bag path="/bag" />
            <OrderComplete path="/order-complete" />
        </Router>
    )
}
export default Pages;