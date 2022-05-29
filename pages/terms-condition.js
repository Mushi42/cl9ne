import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import Footer from '../components/Layouts/Footer';

class TermsCondition extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBannerContent pageTitle="Terms & Conditions" pageCaption="This Agreement sets forth the general terms and conditions of your use of the cl9nepay.com." />

                <div className="ptb-70">
                    <div className="container">
                        <div className="main-text-content">

                            <h3>Accounts and membership</h3>
                            <p>You must be at least 18 years of age to use cl9nepay Website and mobile application. By using cl9nepay Website, Mobile application and by agreeing to this Agreement you warrant and represent that you are at least 18 years of age. If you create an account on the Website or the Mobile application, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.</p>

                            <h3>Important Notice:</h3>
                            <p>Make sure the account number, phone number, beneficiary name, beneficiary address and currency selected are corrected before sending. If the information you provided are incorrect. Your money may be sent to a wrong person and may not be recovered.</p>

                            <h3>Right to refund:</h3>
                            <p>"You, the customer, are entitled to a refund of the money to be transmitted as the result of this agreement if cl9nepay does not forward the money received from You within 3 days of the date of its receipt, or does not give instructions committing an equivalent amount of money to the person designated by You within 48 hours of the date of the receipt of the funds from You.</p>

                            <h3>Changes and amendments</h3>
                            <p>We reserve the right to modify this Agreement or its policies relating to the Website (<a href="http://cl9ne.com/" target="_blank">cl9nepay.com</a>)</p>

                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default TermsCondition;