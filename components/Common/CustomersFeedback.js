import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 0,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
}

class CustomersFeedback extends Component {

    _isMounted = false;
    state = {
        display: false
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="feedback-area ptb-70 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>What customers say about Us</h2>
                        <div className="bar"></div>
                        <p>With over several years combined foreign exchange experience, we know how to deliver an ‘Excellent’ services
                        </p>
                    </div>

                    {this.state.display ? <OwlCarousel
                        className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                    <q>Excellent site very well designed, very convenient to use. Transfers are reliable and safe. The team is great, very flexible, always listening and helping you. I can’t even consider using another platform as Currency Transfer!</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/dummy-profile.jpg" alt="image" />
                                    <h3>John Lucy</h3>
                                    <span>Founder & Consultant</span>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                    <q>OUTSTANDING! Amazing service and super speed, smooth and efficient. I have a direct link to my account officer if I need. Only a simpleton would use the main banks for any currency transfers.</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/dummy-profile.jpg" alt="image" />
                                    <h3>John Smith</h3>
                                    <span>CTO  & Consultant</span>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                    <q>“Simply the best money transfer service, Exchange rates are far better than another exchange. Highly Recommended.”</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/dummy-profile.jpg" alt="image" />
                                    <h3>Maxwel Warner</h3>
                                    <span>Chief Manager</span>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                    <q>Transaction went smoother, and additionally the transactional charges are way cheaper than sending through any local bank.</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/dummy-profile.jpg" alt="image" />
                                    <h3>Ross Taylor</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-feedback">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>
                                    <q>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                                </p>

                                <div className="client-img">
                                    <img src="/images/dummy-profile.jpg" alt="image" />
                                    <h3>James Anderson</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default CustomersFeedback;