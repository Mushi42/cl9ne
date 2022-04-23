import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import { Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import Link from 'next/link';
import { Button } from 'react-bootstrap';
// import './styles.scss'

class MainBanner extends Component {
    state = {
        modal: false,
        mobileModal: false,
        bankModal: false
    }

    setModalShow = (e) => {
        this.setState({
            modal: !this.state.modal
        })
    }
    setMobileModalShow = (e) => {
        this.setState({
            mobileModal: !this.state.mobileModal,
            modal: !this.state.modal
        })
    }
    setBankModalShow = (e) => {
        this.setState({
            bankModal: !this.state.bankModal,
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <>
                <div className="main-banner-section">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="banner-content">
                                            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12">
                                        <div className="money-transfer-form">
                                            {/* <form> */}
                                            <div className="form-group">
                                                <label>You Send</label>
                                                <div className="money-transfer-field">
                                                    <input type="text" className="form-control" placeholder="1,000" />
                                                    <div className="amount-currency-select dropdown">
                                                        <button className="dropbtn">
                                                            Currency
                                                        </button>

                                                        <div className="dropdown-content">
                                                            <a href="#">
                                                                <img src=
                                                                    "https://media.geeksforgeeks.org/wp-content/uploads/20200630132504/uflag.jpg"
                                                                    width="20" height="15" /></a>
                                                            <a href="#">
                                                                <img src=
                                                                    "https://media.geeksforgeeks.org/wp-content/uploads/20200630132502/eflag.jpg"
                                                                    width="20" height="15" /></a>
                                                            <a href="#">
                                                                <img src=
                                                                    "https://media.geeksforgeeks.org/wp-content/uploads/20200630132500/bflag.jpg"
                                                                    width="20" height="15" /> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="currency-info">
                                                <div className="bar"></div>
                                                <span><strong>415.3</strong> Exchange Rate</span>
                                                {/* <span><strong>$4.50</strong> Transition Fees</span> */}
                                            </div>

                                            <div className="form-group">
                                                <label>Recipient gets</label>
                                                <div className="money-transfer-field">
                                                    <input type="text" className="form-control" placeholder="1,000" />
                                                    <div className="amount-currency-select dropdown">
                                                        <button className="dropbtn">
                                                            Currency
                                                        </button>

                                                        <div className="dropdown-content">
                                                            <a href="#">
                                                                <img src=
                                                                    "https://media.geeksforgeeks.org/wp-content/uploads/20200630132504/uflag.jpg"
                                                                    width="20" height="15" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="money-transfer-info">
                                                <span>You could save vs banks <strong>1,010.32 USD</strong></span>
                                            </div>

                                            <button className="btn btn-primary" onClick={this.setModalShow}>Send Money</button>

                                            <button type="submit" className="btn btn-success calculate"> Calculate </button>

                                            <div className="terms-info">
                                                <p>By clicking continue, I agree with <Link href="/terms-policy"><a>Terms & Policy</a></Link></p>
                                            </div>
                                            {/* </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.modal} onHide={this.setModalShow} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Transfer Option</Modal.Title>
                    </Modal.Header>

                    <Modal.Footer style={{ display: 'flex', margin: 10 }}>
                        <Button style={{ border: "none", padding: 50 }} variant="secondary" onClick={this.setMobileModalShow}>Mobile Top-up</Button>
                        <Button style={{ border: "none", padding: 50 }} variant="primary" onClick={this.setBankModalShow}>Bank Transfer</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.mobileModal} onHide={this.setMobileModalShow} centered>
                    <Modal.Header closeButton>
                        Mobile Top Up - Sender Information
                    </Modal.Header>
                    <Modal.Footer>
                        <input placeholder='name' />
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.bankModal} onHide={this.setBankModalShow} centered>
                    <Modal.Header closeButton>
                        Bank - Sender Information
                    </Modal.Header>
                    <Modal.Footer>

                        <input placeholder='name' />
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default MainBanner;