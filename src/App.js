import React, { Component } from "react";

import Home from './pages/home'

import Logo from './pages/Logo'
import Header from './pages/header'
import Footer from './pages/footer'
import Cart from './pages/Cart'
import Products from './pages/products'
import Artists from './pages/Artists'



import { Switch, Route } from "react-router-dom"

class App extends Component {

    state = {
        cartItems: [],
    }


    handleAddToCart = (item) => {
        this.setState({ cartItems: [...this.state.cartItems, item] })
    }
    handleDeleteFromCart = (item) => {
        let cartItems = this.state.cartItems.concat()
        cartItems = cartItems.filter(cartItem => cartItem !== item)
        this.setState(
            { cartItems: [...this.state.cartItems] })
    }

    // const removeFromCart = (item) => {
    //     setCart(
    //     cart.filter((cartItem) => cartItem !== productToRemove)
    //     );
    // };

    // remove_post_on_list = (deletePostId) => {
    //     this.setState({
    //     postList: this.state.postList.filter(item => item.post_id != deletePostId)
    //     })
    // }


    render() {
        console.log(this.state.cartItems)
        return (

            <div className="App">


                <Logo />
                <Header />
                <Switch>

                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route path="/products">
                        <Products addToCart={this.handleAddToCart} />
                    </Route>
                    <Route path="/Cart">
                        <Cart items={this.state.cartItems} remove={this.handleDeleteFromCart} />
                    </Route>

                    <Route path="/Artists">
                        <Artists />
                    </Route>

                </Switch>
                <Footer />

            </div>
        );
    }
}

export default App;
