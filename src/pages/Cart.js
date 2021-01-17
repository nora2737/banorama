import React, { Component } from "react"
import CartItem from "./CartItem"

class Cart extends Component {
    render() {
        // if (this.props.items === []) {
        //     return
        // }
        // console.log("cart items", this.props.items)
        return (
            <>
                {this.props.items.map((item) => {
                    return <CartItem key={item.id} item={item} remove={this.props.remove} />
                })}

            </>
        )

    }
}

export default Cart
