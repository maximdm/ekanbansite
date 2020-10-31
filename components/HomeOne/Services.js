import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="offer-area pt-100 pb-70">
			    <div className="container">
                    <div className="section-title">
                        <span>Servicii</span>
                        <h2>Sevicii profesioanle oferite</h2>
                        <p>încercăm să îți oferim toate condițiile pentru a putea duce la finalizare orice proiect îți propui, din orice domeniu</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-chip"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Serviciu automatizat</a>
                                    </Link>
                                </h3>
                                <p>Desfășoară proiectul în etape iar apoi fiecare etapă va fi evaluată de către aplicație</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-vr"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Nivele de acces</a>
                                    </Link>
                                </h3>
                                <p>Stabilește autoritate separată de acces pentru fiecare proiect</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>IMplică toți membrii echipei</a>
                                    </Link>
                                </h3>
                                <p>Stabilește responsabilități membrilor echipei în fiecare proiect și evaluează activitatea lor.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Cuustomizează ușor instrumentul de managment</a>
                                    </Link>
                                </h3>
                                <p>Customizează pentru industria ta și nevoile companiei tale .</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Observă fiecare etapă a proiectului</a>
                                    </Link>
                                </h3>
                                <p>Primește notificări pentru fiecare schimbare în proiectul tău</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Statistică</a>
                                    </Link>
                                </h3>
                                <p>Primește statistici despre activitatea în proiect</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src="/images/shape/services-shape/1.png" alt="Image" />
                    <img src="/images/shape/services-shape/2.png" alt="Image" />
                    <img src="/images/shape/services-shape/3.png" alt="Image" />
                    <img src="/images/shape/services-shape/4.png" alt="Image" />
                    <img src="/images/shape/services-shape/5.png" alt="Image" />
                    <img src="/images/shape/services-shape/6.png" alt="Image" />
                </div>
            </section>
        );
    }
}

export default Services;