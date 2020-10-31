import React, { Component } from 'react';
import Link from 'next/link';

class CardsText extends Component {
    

    render() 
     {let { Card_1_Title,  Card_2_Title, Card_3_Title,Card_4_Title,Card_1_Text,Card_2_Text,Card_3_Text,Card_4_Text,Heading, Heading_small_1,Heading_small_2,Image_1_src,Image_2_src,ParagraphText_2,ParagraphText_1,Button_text,Button_link} = this.props;
        return (
            <section className="business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                       

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">{Card_1_Title}</span></h2>
                                        <p>{Card_1_Text}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">{Card_2_Title}</span></h2>
                                        <p>{Card_2_Text}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">{Card_3_Title}</span></h2>
                                        <p>{Card_3_Text}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">{Card_4_Title}</span></h2>
                                        <p>{Card_4_Text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="business-content">
                            <h2>{Heading}</h2>
                        </div>

                        <div className="single-business">
                        
                            <h3>{Heading_small_1}</h3><img src={Image_1_src} alt="Image" />
                            <p>{ParagraphText_1}</p>
                        </div>

                        <div className="single-business">
                            
                            <h3>{Heading_small_2}</h3><img src={Image_2_src} alt="Image" />
                            <p>{ParagraphText_2}</p>
                        </div>

                        <div className="business-btn">
                            <Link href={Button_link}>
                                <a className="default-btn">
                                   {Button_text} 
                                </a>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CardsText;