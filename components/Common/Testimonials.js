import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
}

class Testimonials extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="client-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Testimoniale</span>
                        <h2>Ce cred cei cu care am lucrat</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Este un tool pe care îl utilizez zilnic</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                    <img src="/images/clients/client1.jpg" alt="Image" />
                                    <h3>Alex Mernă</h3>
                                    <span>Patron</span>
                                </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Îmi place că pot supraveghea echipa din orice deplasare fără să deranjez pe nimeni</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                            <img src="/images/clients/client2.jpg" alt="Image" />
                            <h3>Maria Lurea</h3>
                            <span>Avocat</span>
                        </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>E bine să mai poți face o anumită ordine în sarcini din când în când</p>
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                            <img src="/images/clients/client3.jpg" alt="Image" />
                            <h3>Mihai Pop</h3>
                            <span>Software Developer</span>
                        </div>
                    </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>A fost o experiență foarte bună și a dus la o creștere semnigficativă a proiectelor îndeplinite
                            </p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                           
                            <div className="client-img">
                            <img src="/images/clients/client4.jpg" alt="Image" />
                            <h3>Horațiu Domase</h3>
                            <span>Inginer IT</span>
                        </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Testimonials;