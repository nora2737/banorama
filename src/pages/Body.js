import React, { Component } from "react";
import { Link } from "react-router-dom"

class Body extends Component {

    render() {

        return (


            <div className="container mx-0 my-3">
                <div className="row  my-3">
                    <div className="col-md-8 col-lg-8 col-sm-12 home">
                        <p>
                        New Prints
                            </p>
                        <p>
                        Over 15 New Prints wrer Added! ready to get at your own pace, wherever you are.
                            </p>
                        <Link className=" link-button" to="/products">EXPLORE NOW</Link>

                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 img">
                        <img src="https://i.ibb.co/5cBzsft/0-E4-B7090-0392-42-B6-925-B-71-DF72-DABA21.jpg" alt="" height="190px" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4 col-lg-4 col-sm-12 img">
                        <img src="https://i.ibb.co/TWDkSYm/0-E00-AC58-788-B-4456-8-C08-23-E66-C23-EDA0.jpg" alt="" height="190px" />
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 home">
                        <p>
                            Free Shipping
                            </p>
                        <p>
                            Over 30 Prints with free shipping are ready to get at your own pace, wherever you are.
                            </p>
                        <Link className=" link-button " to="/products">EXPLORE NOW</Link>

                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-8 col-lg-8 col-sm-12 home">
                        <p>
                             Big Sales
                           
                            </p>
                        <p>
                        Save 20% on your first order, use the code SMN20.
                           
                            </p>
                        <Link className="link-button " to="/products">EXPLORE NOW</Link>

                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 img">
                        <img src="https://i.ibb.co/Qf9rYM6/FF453-C2-A-3-DD2-4-FC3-932-E-9559-F742-E2-AC.jpg" alt="" height="190px" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
