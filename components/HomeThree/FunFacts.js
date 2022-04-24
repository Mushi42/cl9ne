import React, { Component } from 'react';
import Link from 'next/link';

class FunFacts extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-70 pt-0">
                <div className="container">
                    <div className="section-title">
                        <h2>We always try to understand customers expectation</h2>
                        <div className="bar"></div>
                        <p>Our customer services team is available 24/7 in 6 different languages to help you with anything you need.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>2</span>K</h3>
                                <p>Transactions</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>200</span>+</h3>
                                <p>Feedback</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>50</span>+</h3>
                                <p>Workers</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>70</span>+</h3>
                                <p>Contributors</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Have any questions about us?</h3>
                        <p>Don't hesitate to contact us</p>

                        <Link href="/contact">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;