import React from 'react';

function Contact() {
    return (<>
        <h5>Contact Us</h5>
        <div className=" row mx-3">

            <div className=" col-4 ">
                <label for="floatingInput">Name</label>
                <input type="Text" className="form-control" id="floatin" placeholder="Your Name" required />
                <label for="floatingInput">Email </label>
                <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" required />
            </div>
            <div className=" col-4 mt-auto">
                <label for="exampleFormControlTextarea1" className="form-label ">Mesasge</label>
                <textarea className="form-control " id="exampleFormControlTextarea1" rows="4" required></textarea>
            </div>
            <div className=" col-2 mt-auto">
                <button type="button" className="btn btn-light  ">Send</button>
            </div>
            <div className=" col-2 mt-auto">
                <div className=" row">
                    <img className="socialmedia" src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" alt="" height="50px" />
                    <img className=" socialmedia" src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png" alt="" height="55px" />
                    <img className=" socialmedia " src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" alt="" height="30px" />
                </div> </div>
        </div>
    </>
    )
}


export default Contact
