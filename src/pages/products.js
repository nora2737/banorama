import React, { Component } from "react";
import Card from "./Card";
import firebase from '../firebase.js'
import LoopIcon from '@material-ui/icons/Loop';
class Products extends Component {
  state = {
    products: null,
  }
  async componentDidMount() {
    const data = await firebase.database().ref().once("value")
    const products = data.val()
    this.setState({ products: products })
  }
  render() {
    if (this.state.products === null) {
      return <h1 className="laoding">Laoding...<LoopIcon /></h1>
    }
    return (
      <div className="products ">
        <div className="container-fluid content-row ">
          <div className="row ">
            {this.state.products ? this.state.products.map((item) => {
              return <Card key={item.id} item={item} addToCart={this.props.addToCart} />
            }) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default Products
