import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="choose-title">
                                <span>De ce sistemul kanban</span>
                                <h2>Platforma noastră poate să te ajute să termini orice proiect!</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>
                                            01 <i className="flaticon-technical-support"></i>
                                        </span>
                                        <h3>Împarte proiectul în sarcini bine definite</h3>
                                        <p>Atribuie fiecărui membru rolul său în proiect și desfășoară proiectul în obiective SMART mărunte</p>
                                    </li>

                                    <li className="ml">
                                        <span>
                                            02 <i className="flaticon-shield"></i>
                                        </span>
                                        <h3>Urmărește implementarea proiectului </h3>
                                        <p>Verfică fiecare etapă și observă evoluția proiectului tău prin notificări clare și precise. Obține statistică detaliată despre proiectul tău. Identifică rapid erorile de producție în desfășurarea proiectului și corectează-le</p>
                                    </li>

                                    <li className="ml-25">
                                        <span>
                                            03 <i className="flaticon-support"></i>
                                        </span>
                                        <h3>Proiectul tău finalizat</h3>
                                        <p>Finalizează orice proiect și evalueză gradul de implicare.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-img">
                                <img src="/images/choose-img.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;