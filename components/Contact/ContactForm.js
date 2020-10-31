import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <section className="main-contact-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Contactează-ne</span>
                        <h2>Conactează-ne pentru orice întrebare</h2>
                        <p>Încercăm să răspundem fiecărui mesaj în maxim 24 ore</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-wrap contact-pages mb-0">
                                <div className="contact-form">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" required  placeholder="Numele tău" />
                                                </div>
                                            </div>
                
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" required  placeholder="Email-ul tău" />
                                                </div>
                                            </div>
                
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="phone_number" id="phone_number" required  className="form-control" placeholder="Telefonul tău" />
                                                </div>
                                            </div>
                
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Subiect" />
                                                </div>
                                            </div>
                
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Mesaj"></textarea>
                                                </div>
                                            </div>
                
                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn btn-two">
                                                  Trimite mesajul
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-img">
                                <img src="/images/contact-img.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;