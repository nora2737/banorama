import React, { Component } from "react"
//import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';

class Card extends Component {
    render() {

        return (

            <div>
                <div className="card mb-4 mx-2" >
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img
                                height="150px"
                                src={this.props.item.image}
                                alt=""
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.item.name}</h5>
                                <p className="card-text">{this.props.item.description}</p>
                                <h4 className="card-title">{this.props.item.price}
                                    {/* <button
                                            type="button"
                                            className="btn btn-danger ml-auto"
                                            onClick={() => this.props.remove(this.props.item)}
                                        >
                                            <RemoveShoppingCartOutlinedIcon>
                                            </RemoveShoppingCartOutlinedIcon>
                                        </button> */}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
