import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TestimonialsContent from '../components/Testimonials/TestimonialsContent';
import Footer from '../components/Layouts/Footer';

class Testimonials extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Testimoniale" 
                    homePageUrl="/" 
                    homePageText="Acasă" 
                    activePageText="Testimoniale" 
                /> 
                <TestimonialsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Testimonials;