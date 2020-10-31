import React, { Component } from 'react';
import Link from 'next/link';

class Img_left_text_right extends Component {
    render() {
        let { image_src, image_alt, page_title, page_text_1,page_text_2} = this.props;
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        
                       <div className="col-lg-6">
                        <div className="about-img">
                            <img src={ image_src} alt={ image_alt} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="about-content">
                        
                        <h2>{page_title}</h2>
                        <p>{page_text_1}</p>
                        <p>{page_text_2}</p>
                       
                        

                    </div>
                </div>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default Img_left_text_right;