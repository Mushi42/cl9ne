import React, { useState } from 'react';
import Link from 'next/link';
import { findTransactionById } from '../../pages/api/transaction';
import { Modal, Alert } from 'antd';

import 'antd/dist/antd.css';


const Footer = () => {
    // const [trackId, setTrackId] = useState('')
    // const [showTrackModal, setShowTrackModal] = useState(false)
    // const [showAlert, setShowAlert] = useState(false)
    // const [recordTran, setRecordTrans] = useState({})

    let currentYear = new Date().getFullYear();

    // const trackNow = () => {
    //     if (trackId == '') {
    //         setShowAlert(true)
    //     } else {
    //         findTransactionById(trackId).then(resp => {
    //             setRecordTrans(resp)
    //         })
    //     }
    // }

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
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-1 col-sm-6 col-md-6">

                    </div>

                    <div className="col-lg-4">
                        <div >
                            {/* <button title='Track your transaction' className='btn btn-success' onClick={() => setShowTrackModal(!showTrackModal)} >Track your transaction</button> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
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
                    <p>© {currentYear} CL9NE- All rights Reserved <a href="http://cl9ne.com/" target="_blank">cl9ne.com</a></p>
                </div>
            </div>
        </footer>
    );

}

export default Footer;