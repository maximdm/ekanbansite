import React, { Component } from 'react';
import Link from 'next/link';

class Pricing extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="pricing-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Planuri </span>
                        <h2>Costuri lunare</h2>
                        <p>Prețuri</p>
                    </div>

                    <div className="tab quote-list-tab">
                        {/* Tabs */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>Monthly</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>Anual</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Bază</h3>
                                                <p>Pachet de bază</p>
                                            </div>
                                            <span>9Euro<sub>/m</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                   Stocare pe cloud a proiectelor
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                   Backup Lunar
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customizare boarduri
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Asistență de instalare
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    5 nivele de acceptare
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Backup săptămânal
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                   Backup zilnic
                                                </li>
                                            </ul>

                                            <Link href="#">
                                                <a className="default-btn">
                                                   Începe acum
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                    <div className="single-pricing">
                                    <div className="pricing-top-heading">
                                        <h3>Administrator</h3>
                                        <p>Pachet Intermediar</p>
                                    </div>
                                    <span>19Euro<sub>/m</sub></span>

                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                           Stocare pe cloud a proiectelor
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                           Backup Lunar
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Customizare boarduri
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Asistență de instalare
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            5 nivele de acceptare
                                        </li>
                                        <li>
                                            <i className='bx bx-x'></i>
                                            Backup săptămânal
                                        </li>
                                        <li>
                                            <i className='bx bx-x'></i>
                                           Backup zilnic
                                        </li>
                                    </ul>

                                            <Link href="#">
                                                <a className="default-btn">
                                                   Începe acum
                                                </a>
                                            </Link>

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Premium</h3>
                                                <p>Pachet premium</p>
                                            </div>
                                            <span>29 euro <sub>/m</sub></span>

                                            <ul>
                                            <li>
                                                <i className='bx bx-check'></i>
                                               Stocare pe cloud a proiectelor
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                               Backup Lunar
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Customizare boarduri
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Asistență de instalare
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                5 nivele de acceptare
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Backup săptămânal
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                               Backup zilnic
                                            </li>
                                        </ul>

                                            <Link href="#">
                                                <a className="default-btn">
                                                   Începe acum
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
 
                            <div id="tab2" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                        <div className="pricing-top-heading">
                                        <h3>Bază</h3>
                                        <p>Pachet de bază</p>
                                    </div>
                                    <span>90 Euro<sub></sub></span>

                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                           Stocare pe cloud a proiectelor
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                           Backup Lunar
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Customizare boarduri
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Asistență de instalare
                                        </li>
                                        <li>
                                            <i className='bx bx-x'></i>
                                            5 nivele de acceptare
                                        </li>
                                        <li>
                                            <i className='bx bx-x'></i>
                                            Backup săptămânal
                                        </li>
                                        <li>
                                            <i className='bx bx-x'></i>
                                           Backup zilnic
                                        </li>
                                    </ul>

                                            <Link href="#">
                                                <a className="default-btn">
                                                   Începe acum
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                        <div className="pricing-top-heading">
                                        <h3>Administrator</h3>
                                        <p>Pachet Intermediar</p>
                                    </div>
                                    <span>190 Euro</span>

                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                           Stocare pe cloud a proiectelor
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                           Backup Lunar
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Customizare boarduri
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            Asistență de instalare
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            5 nivele de acceptare
                                        </li>
                                        <li>
                                            <i className='bx bx-x'></i>
                                            Backup săptămânal
                                        </li>
                                        <li>
                                            <i className='bx bx-x'></i>
                                           Backup zilnic
                                        </li>
                                    </ul>

                                            <Link href="#">
                                                <a className="default-btn">
                                                   Începe acum
                                                </a>
                                            </Link>

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                        <div className="pricing-top-heading">
                                        <h3>Premium</h3>
                                        <p>Pachet premium</p>
                                    </div>
                                    <span>290 euro <sub>/m</sub></span>

                                    <ul>
                                    <li>
                                        <i className='bx bx-check'></i>
                                       Stocare pe cloud a proiectelor
                                    </li>
                                    <li>
                                        <i className='bx bx-check'></i>
                                       Backup Lunar
                                    </li>
                                    <li>
                                        <i className='bx bx-check'></i>
                                        Customizare boarduri
                                    </li>
                                    <li>
                                        <i className='bx bx-check'></i>
                                        Asistență de instalare
                                    </li>
                                    <li>
                                        <i className='bx bx-check'></i>
                                        5 nivele de acceptare
                                    </li>
                                    <li>
                                        <i className='bx bx-check'></i>
                                        Backup săptămânal
                                    </li>
                                    <li>
                                        <i className='bx bx-check'></i>
                                       Backup zilnic
                                    </li>
                                </ul>

                                            <Link href="#">
                                                <a className="default-btn">
                                                   Începe acum
                                                </a>
                                            </Link>
                                        </div>
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

export default Pricing;