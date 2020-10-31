import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img2.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Despre noi</span>
                                <h2>Venim în sprijinul completării proiectelor dumneavoastră</h2>
                                <p>Pentru o gestionare eficientă e nevoie de o supraveghere și un canal de comnunicare disponibil la nivelul întregii echipe de proiect.Aici dorim să vă sprijinim în completarea proiectelor dumneavoastră la timp și într-un mod excelent.</p>
                               
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Backup zilnic
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Proiecte nelimitate
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                PHP 7 pregătit
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Servere PHP performante
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                               Suport email sau telefonic
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Roluri diferite în managmentul bazelor de date
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="/other_pages/more_details">
                                    <a className="default-btn">
                                        Mai multe detalii
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