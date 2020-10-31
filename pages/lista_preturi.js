import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Pricing from '../components/HomeTwo/Pricing';

import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
              
            <Navbar />
                <PageBanner 
                pageTitle="Listă prețuri" 
                homePageUrl="/" 
                homePageText="Acasă" 
                activePageText="Prețuri" 
            /> 
            <Pricing />
            
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;