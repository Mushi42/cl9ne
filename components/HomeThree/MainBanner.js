import Link from 'next/link';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { Dropdown } from 'react-bootstrap'
import { Select, Modal as AntModal } from 'antd';

import { makeTransaction } from '../../pages/api/transaction'

import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';

const { Option } = Select;

class MainBanner extends Component {
    state = {
        mobileModal: false,
        mobileRecieveModel: false,
        bankModal: false,
        bankRecieveModel: false,
        transaction: {
            senderDetails: {
                name: '',
                phone: '',
                email: ''
            },
            receiverDetails: {
                name: '',
                phone: '',
                bank: '',
                IBAN: '',
                receiverNumber: '',
                serviceProvider: ''
            },
            amount: 0,
            transactionType: '',
            status: 'pending'
        }

    }
    handleTransactionType = (value) => {
        this.setState(prevState => ({
            transaction: {
                ...prevState.transaction,
                'transactionType': value
            }
        }))
    }

    handleMobileTransaction = () => {
        makeTransaction(this.state.transaction, 'mobile').then(resp => {
            console.log('Mobile response', resp)
        })
    }

    handleBankTransaction = () => {
        makeTransaction(this.state.transaction, 'bank').then(resp => {
            console.log('Bank response', resp)
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
    setMobileRecieve = (e) => {
        console.log('State Values', this.state.transaction)
        this.setState({
            mobileRecieveModel: !this.state.mobileRecieveModel,
            mobileModal: !this.state.mobileModal
        })
    }
    setBankRecieve = (e) => {
        this.setState({
            bankRecieveModel: !this.state.bankRecieveModel,
            bankModal: !this.state.bankModal,
        })
    }

    onChange = (value) => {
        console.log(`selected ${value}`);
    }

    onSearch = (val) => {
        console.log('search:', val);
    }

    handleSenderChange = (evt) => {
        this.setState(prevState => ({
            transaction: {
                ...prevState.transaction,
                senderDetails:
                {
                    ...prevState.transaction.senderDetails,
                    [evt.target.name]: evt.target.value
                }
            }
        }))
    }

    handleReceiverDetails = (evt) => {
        this.setState(prevState => ({
            transaction: {
                ...prevState.transaction,
                receiverDetails: {
                    ...prevState.transaction.receiverDetails,
                    [evt.target.name]: evt.target.value
                }
            }
        }))

    }

    handleChange = (evt) => {
        this.setState(prevState => ({
            transaction: {
                ...prevState.transaction,
                [evt.target.name]: evt.target.value
            }
        }))
    }

    handleSelect = (e) => {
        console.log(e);
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
                                            <h1>The cheap, fast way of sending money to Nigeria with 0% fee.</h1>
                                            <p>Whether you’re paying someone overseas or making international business payments, Cl9nePay has modern-day payment solutions to fit your needs.</p>

                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12">
                                        <div className="money-transfer-form">
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

                                            <div className='calculate-btn-grid'>
                                                <button className="btn btn-success calculate" type="submit"> Calculate </button>
                                                <Button className="btn btn-success calculate" variant="secondary" onClick={this.setMobileModalShow}>Mobile Top-up</Button>
                                                <Button className="btn btn-success calculate" variant="secondary" onClick={this.setBankModalShow}>Bank Transfer</Button>
                                            </div>

                                            <div className="terms-info">
                                                <p>By clicking continue, I agree with <Link href="/terms-policy"><a>Terms & Policy</a></Link></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.mobileModal} onHide={this.setMobileModalShow} centered>
                    <Modal.Header closeButton>
                        Mobile Top Up - Sender Information
                    </Modal.Header>
                    <Modal.Body style={{ width: "100%" }}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={this.state.transaction.senderDetails.name}
                            onChange={this.handleSenderChange}
                            className="form-control"
                        />
                        <input
                            type="number"
                            name="phone"
                            value={this.state.transaction.senderDetails.phone}
                            onChange={this.handleSenderChange}
                            placeholder="Enter Phone No."
                            className="form-control"
                        />
                        <input
                            type="text"
                            name="email"
                            value={this.state.transaction.senderDetails.email}
                            onChange={this.handleSenderChange}
                            placeholder="Enter Email"
                            className="form-control"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.setMobileRecieve} style={{ border: "none" }}>NEXT</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.mobileRecieveModel} onHide={this.setMobileRecieve} centered>
                    <Modal.Header closeButton>
                        Mobile Top_up - Reciever Information
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type="number"
                            name="phone"
                            value={this.state.transaction.receiverDetails.phone}
                            onChange={this.handleReceiverDetails}
                            placeholder="Reciever Number"
                            className="form-control"
                        />
                        <Dropdown >
                            <Dropdown.Toggle
                                variant="success"
                                className='dropdownTogglebtn'
                                id="dropdown-basic"
                                onSelect={this.handleSelect}
                            >
                                Service Provider
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item value='MTN'>MTN</Dropdown.Item>
                                <Dropdown.Item value='Globacom'>Globacom</Dropdown.Item>
                                <Dropdown.Item value='Airtel'>Airtel</Dropdown.Item>
                                <Dropdown.Item value='9Mobile'>9Mobile</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input
                            type="number"
                            name="amount"
                            value={this.state.transaction.amount}
                            onChange={this.handleChange}
                            placeholder="Amount"
                            className="form-control"
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleMobileTransaction} style={{ border: "none" }}>SEND</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.bankModal} onHide={this.setBankModalShow} centered>
                    <Modal.Header closeButton>
                        Bank - Sender Information
                    </Modal.Header>
                    <Modal.Body style={{ width: "100%" }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            className="form-control"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Phone No."
                            className="form-control"
                        />
                        <input
                            type="number"
                            name="name"
                            placeholder="Enter Email"
                            className="form-control"
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.setBankRecieve} style={{ border: "none" }}>NEXT</Button>
                    </Modal.Footer>
                </Modal>

                <AntModal visible={this.state.bankRecieveModel} title='Bank - Reciever Information' onCancel={this.setBankRecieve} okText="Send">

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        className="form-control"
                    />
                    <input
                        type="number"
                        name="name"
                        placeholder="Enter Phone No."
                        className="form-control"
                    />

                    <Select
                        showSearch
                        style={{ width: '100%', marginTop: 5, marginBottom: 5 }}
                        placeholder="Select Bank"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="1">Access Bank Plc</Option>
                        <Option value="2">Citibank Nigeria Limited</Option>
                        <Option value="3">Ecobank Nigeria</Option>
                        <Option value="4">Fidelity Bank Plc</Option>
                        <Option value="5">First City Monument Bank Limited</Option>
                        <Option value="6">First Bank of Nigeria Limited</Option>
                        <Option value="7">Guaraty Trust Holding Company Plc</Option>
                        <Option value="8">Heritage Bank Plc</Option>
                        <Option value="9">Keystone Bank Limited</Option>
                        <Option value="10">Polaris Bank Limited. The Successor to Skye Bank Plc.</Option>
                        <Option value="11">Stanbic IBTC Bank Plc</Option>
                        <Option value="12">Standard Chartered</Option>
                        <Option value="13">Sterling Bank Plc</Option>
                        <Option value="14">Titan Trust Bank Limited</Option>
                        <Option value="15">Unity Bank Plc</Option>
                        <Option value="16">Union Bank of Nigeria Plc</Option>
                        <Option value="17">United Bank of Nigeria</Option>
                        <Option value="18">Wema Bank Plc</Option>
                        <Option value="19">Zenith Bank Plc</Option>
                    </Select>
                    <input
                        type="text"
                        name="name"
                        placeholder="Account IBAN Number"
                        className="form-control"
                    />
                    <input
                        type="number"
                        name="name"
                        placeholder="Enter Amount"
                        className="form-control"
                    />


                    {/* <Button style={{ border: "none" }}>SEND</Button> */}

                </AntModal>
            </>
        );
    }
}

export default MainBanner;