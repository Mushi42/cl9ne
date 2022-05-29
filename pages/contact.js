import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import ContactContent from '../components/Contact/ContactContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBannerContent 
                    pageTitle="Term & Conditions" 
                    pageCaption="This Agreement sets forth the general terms and conditions of your use of the cl9nepay.com." 
                />

                <ContactContent />

                <AccountCreateArea />

                <Footer />
            </>
        );
    }
}

export default Contact;