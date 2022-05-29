import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeThree/MainBanner';
import FeaturedCard from '../components/HomeThree/FeaturedCard';
import HowItWorks from '../components/HomeThree/HowItWorks';
import ServicesContent from '../components/HomeThree/ServicesContent';
import FunFacts from '../components/HomeThree/FunFacts';
import CustomersFeedback from '../components/Common/CustomersFeedback';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';
import Rates from '../components/Rates/Rates';
import "antd/dist/antd.css";

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <FeaturedCard />

                <Rates />

                <HowItWorks />

                {/* <ServicesContent /> */}

                {/* <FunFacts /> */}

                {/* <CustomersFeedback /> */}

                <AccountCreateArea />

                <Footer />
            </>
        );
    }
}

export default Index;