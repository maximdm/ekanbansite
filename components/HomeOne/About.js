import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Despre Ekanba</span>
                                <h2>Partenerul tău în fiecare proiect</h2>
                                <p>Pentru că multitaskingul duce doar la haos noi îți oferim soluția strcturată de managment al proiectului tău.</p>
                               
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Automatizează programul de managment
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                               Un număr infinit de proiect
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Tehnologie PHP de ultimă oră
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                              Backup al datelor
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Notificări automate
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                              Statistică exhaustivă 
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="/about-page">
                                    <a className="default-btn">
                                        Mai multe
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

export default About;