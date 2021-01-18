import React, { Component } from "react";

//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
class Card extends Component {

    render() {

        return (



            <div className="col-sm-6 col-md-3 col-lg-3 my-4 " >

                <div className="card h-100" >

                    <h5 className="card-title">{this.props.item.name}</h5>
                    <img className="card-img-top" src={this.props.item.image} alt="product" />

                    <div className="cardbody">
                        <p className="card-text">{this.props.item.description}</p>
                        <h4 className="card-title">{this.props.item.price}</h4>
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => this.props.addToCart(this.props.item)} >

                    </button>


                </div>
            </div>





        )
    }
}

export default Card
