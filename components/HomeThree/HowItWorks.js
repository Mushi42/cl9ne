import React, { Component } from 'react';

class HowItWorks extends Component {
    render() {
        return (
            <section className="how-it-works-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>How It's Works</h2>
                        <div className="bar"></div>
                        <p>Let’s see how our services work.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src="/images/how-it-works/how-it-work1.png" alt="image" />
                                <h3>1. Calculate your amount.</h3>
                                <p>Use the calculator on our site to estimate your transaction amount.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src="/images/how-it-works/how-it-work2.png" alt="image" />
                                <h3>2.	Choose an amount to send.</h3>
                                <p>By the exchange rate, select the amount you want to send.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src="/images/how-it-works/how-it-work3.png" alt="image" />
                                <h3>3.	Add sender details.</h3>
                                <p>Provide all your details for the transaction. All the important details for the transfer of payment.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src="/images/how-it-works/how-it-work4.png" alt="image" />
                                <h3>4.	Verify Recipient Details:</h3>
                                <p>Provide all the necessary information of the recipient of the transaction. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src="/images/how-it-works/how-it-work5.png" alt="image" />
                                <h3>5.	Pay for the transfer.</h3>
                                <p>Pay by card through our secure gateway.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src="/images/how-it-works/how-it-work6.png" alt="image" />
                                <h3>6.	That’s it.</h3>
                                <p>And that’s pretty much it. You good to go!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;