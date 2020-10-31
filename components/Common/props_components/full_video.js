import React, { Component } from 'react';
import Link from 'next/link';

class FullVideo extends Component {
    render() {

        let { video_src} = this.props;

        return (
            <section className="about-area pt-100">
            <div className="container">
                <div className="row align-items-center">
             
                    <div className="col-lg-12">
                    <video width="1024" height="240" controls>
                    <source src={video_src} type="video/mp4" />
                 
                  Your browser does not support the video tag.
                  </video>
                <br></br>
                           
                       
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
}

export default FullVideo;