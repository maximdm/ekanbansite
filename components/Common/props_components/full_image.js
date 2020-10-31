import React, { Component } from 'react';
import Link from 'next/link';

class FullImage extends Component {
    render() {

        let { image_src} = this.props;

        return (
            <section className="about-area pt-100">
            <div className="container">
                <div className="row align-items-center">
             
                    <div className="col-lg-12">
                     
                    <div className="about-img">
                    <img src={image_src} alt="Image" />
                </div>
                <br></br>
                           
                       
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
}

export default FullImage;