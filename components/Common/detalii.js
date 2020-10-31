import React, { Component } from 'react';
import Link from 'next/link';

class Detalii extends Component {
    render() {
        return (
            <section className="business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="business-content">
                                <h2>Asigură succesul și eficiența proiectelor derulate de tine</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Gestionare de către AI a evoluției proiectelor tale</h3>
                                <p>Stabilește linia generală a rpoiectelor iar apoi desfășoarăle. Managmentul acestor proiecte va fi gestionat automat prentru tine</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Crează instrumentele și echipa de care ai nevoie</h3>
                                <p>Stabilește accesul fiecărui membru al echipei și automatizează proiectul tău de managment pentru a asigura o ierarhie a echipei tale, fiecare membru cu atribuțiile și drepturile sale.</p>
                            </div>

                            <div className="business-btn">
                                <Link href="/about-2">
                                    <a className="default-btn">
                                        Vezi tutorial
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">Aspiră</span></h2>
                                        <p>Du proiectul tău la capât</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">Fi un manager 24 h</span></h2>
                                        <p>Gestionează sistemul de oriunde</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">Împarte</span></h2>
                                        <p>Desfășoară proiectul în sarcini specifice</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">Câștigă</span></h2>
                                        <p>Fii tu. Fii un învingător </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Detalii;