import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'

class Slider extends Component {

    render() {

        return (



            <div className="slider ">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://aquarl-duval.com/wp-content/uploads/2017/11/Venise.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="slider-title">« Gondolas in Venice »</h3>
                            <p className="slider-p">Venice – Original watercolor painting on Arches paper 356gr. </p>
                            <p className="slider-title">By Thierry Duval  </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://aquarl-duval.com/wp-content/uploads/2017/11/palaisdoges.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="slider-title">« Le Palais des Doge » </h3>
                            <p className="slider-p">Original watercolor painting.
Size: 30in x 10.2in. </p>
                            <p className="slider-title">By Thierry Duval  </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://aquarl-duval.com/wp-content/uploads/2019/10/vuepanoramiquePorto70x37bd.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="slider-title">«Panoramic vue on Porto»</h3>
                            <p className="slider-p">Size : 35,5 inch x 13,8 inch.
Private collection. Sold.  </p>
                            <p className="slider-title">By Thierry Duval  </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider
