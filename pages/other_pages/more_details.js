import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import About from '../../components/AboutOne/About';
import Detalii_right_image from '../../components/Common/Other_pages/detalii_right_image';
import Detalii_left_image from '../../components/Common/Other_pages/detalii_left_image';
import Center_image from '../../components/Common/Other_pages/center_img';
import Center_txt from '../../components/Common/Other_pages/center_txt';
import Testimonials from '../../components/Common/Testimonials';
import TeamTwo from '../../components/Common/TeamTwo';
import Partner from '../../components/Common/Partner';
import Footer from '../../components/Layouts/Footer';

class About_page extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Desre Ekanban" 
                    homePageUrl="/" 
                    homePageText="Acasă" 
                    activePageText="Despre Ekanban" 
                /> 
               
                <Detalii_right_image />
                <Detalii_left_image />
                <Center_image />
                <Center_txt />
                
                <div className="pb-50">
                   
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default About_page;