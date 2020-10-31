import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/AboutOne/About';
import Detalii from '../components/Common/detalii';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class About_page extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Desre Ekanban" 
                    homePageUrl="/" 
                    homePageText="Acasă" 
                    activePageText="Despre noi" 
                /> 
                <About />
                <Detalii />
                <Testimonials />
                <TeamTwo />
                <div className="pb-50">
                   
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default About_page;