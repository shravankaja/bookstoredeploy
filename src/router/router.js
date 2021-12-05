import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/login';
import Home from '../components/Home';
import Bookdetails from '../components/Bookdetails';
import Mycart from '../components/Mycart';
import Wishlist from '../components/Wishlist';
import Orderplaced from '../components/Orderplaced';
import { Provider } from 'react-redux';
import store from '../store.js'


function Router() {
    return (
        <>
            <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                     <Route path = "/home" component = {Home} />
                    <Route path = "/bookdetails" component = {Bookdetails} /> 
                    <Route path="/cart" component={Mycart}/>
                    <Route path="/wish" component={Wishlist}/>
                    <Route path="/ordersuccess" component={Orderplaced}/>
                </Switch>
            </BrowserRouter>
            </Provider >
        </>
    )
}

export default Router;