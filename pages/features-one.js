import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import ServicesCard from '../components/Common/ServicesCard';
import PartnerContent from '../components/Common/PartnerContent';
import AppDownloadContent from '../components/HomeThree/AppDownloadContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';
 
class FeaturesOne extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBannerContent 
                    pageTitle="Our Features" 
                    pageCaption="All the tools you need" 
                />

                <ServicesCard />

                {/* <PartnerContent /> */}

                <AppDownloadContent />

                <AccountCreateArea />

                <Footer />
            </>
        );
    }
}

export default FeaturesOne;