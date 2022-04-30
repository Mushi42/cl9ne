import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/images/cl9neLogo.png" alt="logo" /></a>
                                    </Link>
                                    <p>Cl9nePay makes it easier, faster, and more cost efficient to transfer money across borders. Get started today!</p>
                                </div>

                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>

                                <ul className="footer-contact-info">
                                    
                                    <li>
                                        <span className="mr-1">Email:</span>
                                        info@cl9ne.com
                                    </li>
                                    <li>
                                        <span className="mr-1">Phone:</span>
                                        --
                                    </li>
                
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>© {currentYear} CL9NE- All rights Reserved <a href="http://envytheme.com/" target="_blank">cl9ne.com</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;