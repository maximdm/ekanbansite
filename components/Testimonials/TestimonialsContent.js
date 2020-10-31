import React, { Component } from 'react';
import Link from 'next/link';

class TestimonialsContent extends Component {
    render() {
        return (
            <section className="client-area inner-client-page ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-client">
                                <i className="quotes flaticon-left-quotes-sign"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

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
                        </div>

                        <div className="col-lg-4 col-sm-6">
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
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
                        </div>
                        
                     
                       

                                
                          

                        {/* Pagination */}
                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link page-links">
                                                    <i className='bx bx-chevrons-left'></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="page-item active">
                                            <Link href="#">
                                                <a className="page-link">1</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">2</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">3</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">
                                                    <i className='bx bx-chevrons-right'></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialsContent;