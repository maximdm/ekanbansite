import React, { Component } from 'react';
import Link from 'next/link';

class ServiceSidebar extends Component {
    render() {
        return (
            <div className="service-sidebar-area">
                <div className="service-list">
                    <h3 className="service-details-title">Facilități</h3>
                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    Tehnologie PHP
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Tutoriale
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Servicii platformă cloud
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Soluții de customizare
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="service-list">
                    <h3 className="service-details-title">Informații contact</h3>
                    <ul>
                        <li>
                            +800 603 6035
                            <i className='bx bx-phone-call bx-rotate-270'></i>
                        </li>
                        <li>
                            ekanban@ekanban.ro
                            <i className='bx bx-envelope'></i>
                        </li>
                        <li>
                           123,Brașov, România
                            <i className='bx bx-location-plus'></i>
                        </li>
                        <li>
                            9:00 AM – 8:00 PM
                            <i className='bx bx-time'></i>
                        </li>
                    </ul>
                </div>

                <div className="service-list">
                    <h3 className="service-details-title">Broșuri</h3>
                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    Informații PDF
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Tutorial PDF
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default ServiceSidebar;