import Link from 'next/link';
import React, { Component } from 'react';
import { Button, DropdownButton } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { Dropdown } from 'react-bootstrap'
import { Select, Modal as AntModal } from 'antd';
import Swal from 'sweetalert2'

import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


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
            sender: {
                name: '',
                phone: '',
                email: ''
            },
            receiver: {
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

    clearModal = () => {
        this.setState({
            mobileModal: false,
            mobileRecieveModel: false,
            bankModal: false,
            bankRecieveModel: false,
        })
    }

    handleMobileTransaction = () => {
        if (this.state.transaction.receiver.phone == '' || this.state.transaction.receiver.serviceProvider == ''
            || this.state.transaction.amount == '') {
            alert('Please fill all fields')
        } else {
            makeTransaction(this.state.transaction, 'mobile').then(resp => {
                this.clearModal()
                MySwal.fire({
                    title: 'Sent',
                    text: 'Your transaction has been made. Thanks',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                })
                console.log('Mobile response', resp)
            })
        }
    }

    handleBankTransaction = () => {
        if (this.state.transaction.receiver.bank == '' || this.state.transaction.receiver.IBAN == ''
            || this.state.transaction.receiver.phone == '' || this.state.transaction.receiver.name == '' || this.state.transaction.amount == '') {
            console.log(this.state.transaction)
            alert('Please fill all fields')
        } else {
            makeTransaction(this.state.transaction, 'bank').then(resp => {
                this.clearModal()
                MySwal.fire({
                    title: 'Sent',
                    text: 'Your transaction has been made. Thanks',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                })
                console.log('Mobile response', resp)
            })
        }
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
        if (this.state.transaction.sender.name == '' || this.state.transaction.sender.phone == '' || this.state.transaction.sender.email == '') {
            alert('Please fill all fields')
        } else {
            this.setState({
                mobileRecieveModel: !this.state.mobileRecieveModel,
                mobileModal: !this.state.mobileModal
            })
        }
    }
    setBankRecieve = (e) => {
        if (this.state.transaction.sender.name == '' || this.state.transaction.sender.phone == '' || this.state.transaction.sender.email == '') {
            alert('Please fill all fields')
        } else {
            this.setState({
                bankRecieveModel: !this.state.bankRecieveModel,
                bankModal: !this.state.bankModal,
            })
        }
    }

    onChange = (value) => {
        this.setState(prevState => ({
            transaction: {
                ...prevState.transaction,
                receiver: {
                    ...prevState.transaction.receiver,
                    'bank': this.banks.find((el) => el.value === value).name,
                }
            }
        }))
    }

    onSearch = (val) => {
        console.log('search:', val);
    }

    handleSenderChange = (evt) => {
        this.setState(prevState => ({
            transaction: {
                ...prevState.transaction,
                sender:
                {
                    ...prevState.transaction.sender,
                    [evt.target.name]: evt.target.value
                }
            }
        }))
    }

    handleReceiver = (evt) => {
        this.setState(prevState => ({
            transaction: {
                ...prevState.transaction,
                receiver: {
                    ...prevState.transaction.receiver,
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
        this.setState(prevState => ({
            transaction: {
                ...prevState.transaction,
                receiver: {
                    ...prevState.transaction.receiver,
                    'serviceProvider': e
                }
            }
        }))
    }


    banks = [
        { value: 'Access Bank Plc', name: 'Access Bank Plc' },
        { value: 'Citibank Nigeria Limited', name: 'Citibank Nigeria Limited' },
        { value: 'Ecobank Nigeria', name: 'Ecobank Nigeria' },
        { value: 'Fidelity Bank Plc', name: 'Fidelity Bank Plc' },
        { value: 'First City Monument Bank Limited', name: 'First City Monument Bank Limited' },
        { value: 'First Bank of Nigeria Limited', name: 'First Bank of Nigeria Limited' },
        { value: 'Guaraty Trust Holding Company Plc', name: 'Guaraty Trust Holding Company Plc' },
        { value: 'Heritage Bank Plc', name: 'Heritage Bank Plc' },
        { value: 'Keystone Bank Limited', name: 'Keystone Bank Limited' },
        { value: 'Polaris Bank Limited. The Successor to Skye Bank Plc.', name: 'Polaris Bank Limited. The Successor to Skye Bank Plc.' },
        { value: 'Stanbic IBTC Bank Plc', name: 'Stanbic IBTC Bank Plc' },
        { value: 'Standard Chartered', name: 'Standard Chartered' },
        { value: 'Sterling Bank Plc', name: 'Sterling Bank Plc' },
        { value: 'Titan Trust Bank Limited', name: 'Titan Trust Bank Limited' },
        { value: 'Unity Bank Plc', name: 'Unity Bank Plc' },
        { value: 'Union Bank of Nigeria Plc', name: 'Union Bank of Nigeria Plc' },
        { value: 'United Bank of Nigeria', name: 'United Bank of Nigeria' },
        { value: 'Wema Bank Plc', name: 'Wema Bank Plc' },
        { value: 'Zenith Bank Plc', name: 'Zenith Bank Plc' },
    ]



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
                            value={this.state.transaction.sender.name}
                            onChange={this.handleSenderChange}
                            className="form-control"
                        />
                        <input
                            type="number"
                            name="phone"
                            value={this.state.transaction.sender.phone}
                            onChange={this.handleSenderChange}
                            placeholder="Enter Phone No."
                            className="form-control"
                        />
                        <input
                            type="email"
                            name="email"
                            value={this.state.transaction.sender.email}
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
                            value={this.state.transaction.receiver.phone}
                            onChange={this.handleReceiver}
                            placeholder="Reciever Number"
                            className="form-control"
                        />
                        <DropdownButton onSelect={this.handleSelect} title='Select Provider' name='serviceProvider' variant='success'>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey='MTN'>MTN</Dropdown.Item>
                                <Dropdown.Item eventKey='Globacom'>Globacom</Dropdown.Item>
                                <Dropdown.Item eventKey='Airtel'>Airtel</Dropdown.Item>
                                <Dropdown.Item eventKey='9Mobile'>9Mobile</Dropdown.Item>
                            </Dropdown.Menu>
                        </DropdownButton>
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
                            required
                            value={this.state.transaction.sender.name}
                            onChange={this.handleSenderChange}
                            placeholder="Enter Name"
                            className="form-control"
                        />
                        <input
                            type="number"
                            name="phone"
                            required
                            value={this.state.transaction.sender.phone}
                            onChange={this.handleSenderChange}
                            placeholder="Enter Phone No."
                            className="form-control"
                        />
                        <input
                            type="email"
                            required
                            name="email"
                            value={this.state.transaction.sender.email}
                            onChange={this.handleSenderChange}
                            placeholder="Enter Email"
                            className="form-control"
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.setBankRecieve} style={{ border: "none" }}>NEXT</Button>
                    </Modal.Footer>
                </Modal>

                <AntModal visible={this.state.bankRecieveModel} title='Bank - Reciever Information' onCancel={this.setBankRecieve} okType={'ghost'} onOk={this.handleBankTransaction} okText="Send">

                    <input
                        type="text"
                        name="name"
                        required
                        value={this.state.transaction.receiver.name}
                        onChange={this.handleReceiver}
                        placeholder="Enter Name"
                        className="form-control"
                    />
                    <input
                        type="number"
                        name="phone"
                        value={this.state.transaction.receiver.phone}
                        onChange={this.handleReceiver}
                        placeholder="Enter Phone No."
                        className="form-control"
                    />

                    <Select
                        showSearch
                        style={{ width: '100%', marginTop: 5, marginBottom: 5 }}
                        placeholder="Select Bank"
                        optionFilterProp="children"
                        onChange={this.onChange}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {this.banks.map((el) => (
                            <Option value={el.value}>{el.name}</Option>
                        ))}
                    </Select>
                    <input
                        type="text"
                        name="IBAN"
                        value={this.state.transaction.receiver.IBAN}
                        onChange={this.handleReceiver}
                        placeholder="Account IBAN Number"
                        className="form-control"
                    />
                    <input
                        type="number"
                        name="amount"
                        value={this.state.transaction.amount}
                        onChange={this.handleChange}
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