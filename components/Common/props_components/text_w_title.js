import React, { Component } from 'react';
import Link from 'next/link';

class TextContainer extends Component {
    render() {

        let { pageTitle,  paragraphText_1, paragraphText_2,paragraphText_3, image_full} = this.props;

        return (
            <section className="about-area pt-100">
            <div className="container">
                <div className="row align-items-center">
             
                    <div className="col-lg-12">
                        <div className="about-content">
                            
                            <h2>{pageTitle}</h2>
                            <p>{paragraphText_1}</p>
                            <p>{paragraphText_2}</p>
                            <p>{paragraphText_3}</p>
                        
                            

                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
}

export default TextContainer;