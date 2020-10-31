import React, { Component } from 'react';
import ServiceSidebar from './ServiceSidebar';
import AskQuestionForm from './AskQuestionForm';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <img src="/images/services-details/services-details.jpg" alt="Image" />
                                </div>

                                <h3>Serviciile noastre</h3>
                                <p>Încercăm să venim în sprijinul tău cu un tool pentru gestionarea eficientă a proiectelor tale și toată activitatea aceasta să fie una automată</p>

                                <p>Prioretizează și etapizează pentru a asigura finalitatea și succesul fiecărui proiect pe care îl derulezi.</p>

                                <p>Statistica detaliată care este la un click distanță îti poate reda parametrii importanți ai activității tale și a personalului tău</p>

                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img src="/images/services-details/services-details2.png" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                       Managment Automat
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Backup al datelor
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                       Notificări în timp real
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                      Dispozitive multiple
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Ierarhizare
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <AskQuestionForm />
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;