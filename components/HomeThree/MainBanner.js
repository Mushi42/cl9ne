import Link from 'next/link';
import React, { Component } from 'react';
import { Button, DropdownButton } from 'react-bootstrap';
import StripeModal from '../StripeModal/StripeModal';
import Modal from "react-bootstrap/Modal";
import { Dropdown } from 'react-bootstrap'
import { Select, Modal as AntModal } from 'antd';
import Swal from 'sweetalert2'

import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import { makeTransaction } from '../../pages/api/transaction'
import { getCurrenyData } from '../../pages/api/currency'
import TrackModal from './TrackModal'

import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';


const { Option } = Select;
const currencyOptions = {
    EUR: {
        img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png',
            name:"EUR",
    },
    GBP: {
        img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/1200px-Flag_of_the_United_Kingdom.png',
            name:"GBP",
    },
    USD: {
        img:
            'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png',
            name:"USD",
    },
    NG: {
        img:
            'https://media.istockphoto.com/vectors/united-states-rectangle-flat-vector-id1127371674?k=20&m=1127371674&s=612x612&w=0&h=39DI889AEeU51LgDWOr9fMZ5aWuST6ll3G7IjzwPzW8=',
            name:"NG",
    },
};
const initState = {
  mobileModal: false,
        mobileRecieveModel: false,
        bankModal: false,
        bankRecieveModel: false,
        selectedFlagValue: 'USD',
        currencyList: [],
        transaction: {
            sender: {
                name: '',
                phone: '',
                email: '',
            },
            receiver: {
                name: '',
                phone: '',
                bank: '',
                IBAN: '',
                receiverNumber: '',
                serviceProvider: '',
            },
            amount: '',
            convertedAmount: '',
            currency: 'USD',
            transactionType: '',
            status: 'pending',
        },
        stripeModal: false,
        inputAmount: '',
        exchangeRate: '',
        calculatedPrice: '',
}
class MainBanner extends Component {
  state = {
    mobileModal: false,
    mobileRecieveModel: false,
    bankModal: false,
    bankRecieveModel: false,
    selectedFlagValue: 'USD',
    currencyList: [],
    trackBanner: false,
    transaction: {
      sender: {
        name: '',
        phone: '',
        email: '',
      },
      receiver: {
        name: '',
        phone: '',
        bank: '',
        IBAN: '',
        receiverNumber: '',
        serviceProvider: '',
      },
      amount: '',
      convertedAmount: '',
      currency: 'USD',
      transactionType: '',
      status: 'pending',
    },
    stripeModal: false,
    inputAmount: '',
    exchangeRate: '',
    calculatedPrice: '',
  };

  componentDidMount() {
    getCurrenyData().then((resp) => {
      this.setState({ currencyList: resp });
    });
  }

  showTrackModal = () => {
    this.setState({ trackBanner: true });
  };
  closeTrackModal = () => {
    this.setState({ trackBanner: false });
  };

  showStripModal = () => {
    this.setState({ stripeModal: true });
  };
  closeStripModal = () => {
    this.setState({ ...initState });
  };

  handleTransactionType = (value) => {
    this.setState((prevState) => ({
      transaction: {
        ...prevState.transaction,
        transactionType: value,
      },
    }));
  };

  clearModal = () => {
    this.setState({
      mobileModal: false,
      mobileRecieveModel: false,
      bankModal: false,
      bankRecieveModel: false,
    });
  };

  componentDidMount() {
    getCurrenyData().then((resp) => {
      this.setState({ currencyList: resp });
      this.setState({
        exchangeRate: resp.find((el) => el.name == 'USD')?.convertRate,
      });
    });
  }

  handleMobileTransaction = () => {
    if (
      this.state.transaction.receiver.phone == '' ||
      this.state.transaction.receiver.serviceProvider == '' ||
      this.state.transaction.amount == ''
    ) {
      alert('Please fill all fields');
    } else {
      const newTrasaction = {
        ...this.state.transaction,
        transactionType: 'mobile',
      };
      this.setState({ transaction: newTrasaction });
      this.clearModal();
      this.showStripModal();
    }
  };

  handleBankTransaction = () => {
    if (
      this.state.transaction.receiver.bank == '' ||
      this.state.transaction.receiver.IBAN == '' ||
      this.state.transaction.receiver.phone == '' ||
      this.state.transaction.receiver.name == '' ||
      this.state.transaction.amount == ''
    ) {
      console.log(this.state.transaction);
      alert('Please fill all fields');
    } else {
      const newTrasaction = {
        ...this.state.transaction,
        transactionType: 'bank',
      };
      this.setState({ transaction: newTrasaction });
      this.clearModal();
      this.showStripModal();
    }
  };

  setMobileModalShow = (e) => {
    this.setState({
      mobileModal: !this.state.mobileModal,
      modal: !this.state.modal,
    });
  };
  setBankModalShow = (e) => {
    this.setState({
      bankModal: !this.state.bankModal,
      modal: !this.state.modal,
    });
  };
  setMobileRecieve = (e) => {
    if (
      this.state.transaction.sender.name == '' ||
      this.state.transaction.sender.phone == '' ||
      this.state.transaction.sender.email == ''
    ) {
      alert('Please fill all fields');
    } else {
      this.setState({
        mobileRecieveModel: !this.state.mobileRecieveModel,
        mobileModal: !this.state.mobileModal,
      });
    }
  };
  setBankRecieve = (e) => {
    if (
      this.state.transaction.sender.name == '' ||
      this.state.transaction.sender.phone == '' ||
      this.state.transaction.sender.email == ''
    ) {
      alert('Please fill all fields');
    } else {
      this.setState({
        bankRecieveModel: !this.state.bankRecieveModel,
        bankModal: !this.state.bankModal,
      });
    }
  };

  onChange = (value) => {
    this.setState((prevState) => ({
      transaction: {
        ...prevState.transaction,
        receiver: {
          ...prevState.transaction.receiver,
          bank: this.banks.find((el) => el.value === value).name,
        },
      },
    }));
  };

  onChange2 = (value) => {
    this.setState((prevState) => ({
      transaction: {
        ...prevState.transaction,
        receiver: {
          ...prevState.transaction.receiver,
          serviceProvider: this.serviceProvider.find((el) => el.value === value)
            .name,
        },
      },
    }));
  };

  onSearch = (val) => {
    console.log('search:', val);
  };

  handleSenderChange = (evt) => {
    this.setState((prevState) => ({
      transaction: {
        ...prevState.transaction,
        sender: {
          ...prevState.transaction.sender,
          [evt.target.name]: evt.target.value,
        },
      },
    }));
  };

  handleReceiver = (evt) => {
    this.setState((prevState) => ({
      transaction: {
        ...prevState.transaction,
        receiver: {
          ...prevState.transaction.receiver,
          [evt.target.name]: evt.target.value,
        },
      },
    }));
  };

  handleChange = (evt) => {
    this.setState((prevState) => ({
      transaction: {
        ...prevState.transaction,
        [evt.target.name]: evt.target.value,
      },
    }));
  };

  handleSelect = (e) => {
    this.setState((prevState) => ({
      transaction: {
        ...prevState.transaction,
        receiver: {
          ...prevState.transaction.receiver,
          serviceProvider: e,
        },
      },
    }));
  };

  serviceProvider = [
    { value: 'MTN', name: 'MTN' },
    { value: 'Globacam', name: 'Globacam' },
    { value: 'Airtel', name: 'Airtel' },
    { value: '9Mobile', name: '9Mobile' },
  ];

  banks = [
    { value: 'Access Bank Plc', name: 'Access Bank Plc' },
    { value: 'Citibank Nigeria Limited', name: 'Citibank Nigeria Limited' },
    { value: 'Ecobank Nigeria', name: 'Ecobank Nigeria' },
    { value: 'Fidelity Bank Plc', name: 'Fidelity Bank Plc' },
    {
      value: 'First City Monument Bank Limited',
      name: 'First City Monument Bank Limited',
    },
    {
      value: 'First Bank of Nigeria Limited',
      name: 'First Bank of Nigeria Limited',
    },
    {
      value: 'Guaraty Trust Holding Company Plc',
      name: 'Guaraty Trust Holding Company Plc',
    },
    { value: 'Heritage Bank Plc', name: 'Heritage Bank Plc' },
    { value: 'Keystone Bank Limited', name: 'Keystone Bank Limited' },
    {
      value: 'Polaris Bank Limited. The Successor to Skye Bank Plc.',
      name: 'Polaris Bank Limited. The Successor to Skye Bank Plc.',
    },
    { value: 'Stanbic IBTC Bank Plc', name: 'Stanbic IBTC Bank Plc' },
    { value: 'Standard Chartered', name: 'Standard Chartered' },
    { value: 'Sterling Bank Plc', name: 'Sterling Bank Plc' },
    { value: 'Titan Trust Bank Limited', name: 'Titan Trust Bank Limited' },
    { value: 'Unity Bank Plc', name: 'Unity Bank Plc' },
    { value: 'Union Bank of Nigeria Plc', name: 'Union Bank of Nigeria Plc' },
    { value: 'United Bank of Nigeria', name: 'United Bank of Nigeria' },
    { value: 'Wema Bank Plc', name: 'Wema Bank Plc' },
    { value: 'Zenith Bank Plc', name: 'Zenith Bank Plc' },
  ];

  handlFlagSelect = (evt) => {
    this.setState({ selectedFlagValue: evt.target.title, inputAmount: '' });
    this.setState({
      exchangeRate: this.state.currencyList.find(
        (el) => el.name == evt.target.title
      ).convertRate,
    });
  };

  onChangeAmountOnCal = (evt) => {
    const calculatedAmount = {
      inputAmount: evt.target.value,
      calculatedPrice: evt.target.value
        ? parseInt(evt.target.value) * parseInt(this.state.exchangeRate)
        : 0,
    };
    this.setState((prevState) => ({
      transaction: {
        ...prevState.transaction,
        amount: calculatedAmount.inputAmount,
        convertedAmount: calculatedAmount.calculatedPrice,
        currency: this.state.selectedFlagValue,
      },
    }));
    this.setState(calculatedAmount);
  };
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
                      <h1>
                        The cheap, fast way of sending money to Nigeria with 0%
                        fee.
                      </h1>
                      {/* <p>
                        Whether you’re paying someone overseas or making
                        international business payments, Cl9nePay has modern-day
                        payment solutions to fit your needs.
                      </p> */}
                    </div>
                  </div>
                  

                  <div className="col-lg-5 col-md-12">
                    <div className="money-transfer-form">
                      <div className="form-group">
                        <label>You Send</label>
                        <div className="money-transfer-field">
                          <input
                            type="text"
                            value={this.state.inputAmount}
                            onChange={this.onChangeAmountOnCal}
                            className="form-control"
                            placeholder="0"
                          />
                          <div className="amount-currency-select dropdown">
                            <button className="dropbtn ">
                              <img
                                src={
                                  currencyOptions[this.state.selectedFlagValue]
                                    .img
                                }
                                width="20"
                                height="15"
                              />
                                {currencyOptions[this.state.selectedFlagValue].name}
                            </button>

                            <div className="dropdown-content">
                              <a title="EUR" onClick={this.handlFlagSelect} className="dropdown-flags">
                                <img
                                  title="EUR"
                                  src={currencyOptions.EUR.img}
                                  width="20"
                                  height="15"
                                  style={{ marginRight: 3 }}
                                />
                                {currencyOptions.EUR.name}
                              </a>
                              <a title="GBP" onClick={this.handlFlagSelect} className="dropdown-flags">
                                <img
                                  title="GBP"
                                  src={currencyOptions.GBP.img}
                                  width="20"
                                  height="15"
                                  style={{ marginRight: 3 }}
                                />
                                {currencyOptions.GBP.name}
                              </a>
                              <a title="USD" onClick={this.handlFlagSelect} className="dropdown-flags">
                                <img
                                  title="USD"
                                  src={currencyOptions.USD.img}
                                  width="20"
                                  height="15"
                                  style={{ marginRight: 3 }}
                                />
                                {currencyOptions.USD.name}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="currency-info">
                        <div className="bar"></div>
                        <span>
                          <strong>{this.state.exchangeRate}</strong> Exchange
                          Rate
                        </span>
                      </div>

                      <div className="form-group">
                        <label>Recipient gets</label>
                        <div className="money-transfer-field">
                          <input
                            type="text"
                            disabled
                            className="form-control"
                            placeholder={this.state.calculatedPrice}
                          />
                          <div className="amount-currency-select">
                            <button
                              className="dropbtn"
                              styles={{ width: '90px' }}
                            >
                              <img
                                src={currencyOptions.NG.img}
                                width="20"
                                height="15"
                              />
                              {currencyOptions.NG.name}
                            </button>

                            <div className="dropdown-content">
                              <a href="#">
                                <img
                                  src={currencyOptions.NG.img}
                                  width="20"
                                  height="15"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="money-transfer-info">
                        <span style={{ color: 'white' }}>
                          You could save vs banks{' '}
                          <strong style={{ color: 'white' }}>2 USD</strong>
                        </span>
                      </div>

                      <div className="calculate-btn-grid">
                        {/* <button
                                                    className="btn btn-success calculate"
                                                    type="submit"
                                                >
                                                    {' '}
                                                    Calculate{' '}
                                                </button> */}
                        <Button
                          className="btn btn-success calculate"
                          variant="secondary"
                          disabled={!this.state.calculatedPrice ? true : false}
                          onClick={this.setMobileModalShow}
                        >
                          Mobile Top-up
                        </Button>
                        <Button
                          className="btn btn-success calculate"
                          variant="secondary"
                          disabled={!this.state.calculatedPrice ? true : false}
                          onClick={this.setBankModalShow}
                        >
                          Bank Transfer
                        </Button>
                        <Button
                          className="btn  calculate transaction"
                          // variant="secondary"
                          onClick={this.showTrackModal}
                        >
                          Track Transaction
                        </Button>
                      </div>

                      <div className="terms-info">
                        {/* <p>
                                                    By clicking continue, I agree with{' '}
                                                    <Link href="/terms-policy">
                                                        <a>Terms & Policy</a>
                                                    </Link>
                                                </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={this.state.mobileModal}
          onHide={this.setMobileModalShow}
          centered
        >
          <Modal.Header closeButton>
            Mobile Top Up - Sender Information
          </Modal.Header>
          <Modal.Body style={{ width: '100%' }}>
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
            <Button onClick={this.setMobileRecieve} style={{ border: 'none' }}>
              NEXT
            </Button>
          </Modal.Footer>
        </Modal>

        <AntModal
          visible={this.state.mobileRecieveModel}
          title="Mobile-TopUp - Reciever Information"
          onCancel={this.setMobileRecieve}
          okType={'ghost'}
          onOk={this.handleMobileTransaction}
          okText="Send"
        >
          <input
            type="number"
            name="phone"
            value={this.state.transaction.receiver.phone}
            onChange={this.handleReceiver}
            placeholder="Reciever Number"
            className="form-control"
          />
          <Select
            showSearch
            style={{ width: '100%', marginTop: 5, marginBottom: 10 }}
            size={'large'}
            placeholder="Select Metwork Provider"
            optionFilterProp="children"
            onChange={this.onChange2}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {this.serviceProvider.map((el) => (
              <Option value={el.value}>{el.name}</Option>
            ))}
          </Select>
          <input
            type="number"
            name="amount"
            disabled
            value={this.state.transaction.amount}
            onChange={this.handleChange}
            placeholder="Amount"
            className="form-control"
          />
        </AntModal>

        <Modal
          show={this.state.bankModal}
          onHide={this.setBankModalShow}
          centered
        >
          <Modal.Header closeButton>Bank - Sender Information</Modal.Header>
          <Modal.Body style={{ width: '100%' }}>
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
            <Button onClick={this.setBankRecieve} style={{ border: 'none' }}>
              NEXT
            </Button>
          </Modal.Footer>
        </Modal>

        <AntModal
          visible={this.state.bankRecieveModel}
          title="Bank - Reciever Information"
          onCancel={this.setBankRecieve}
          okType={'ghost'}
          onOk={this.handleBankTransaction}
          okText="Send"
        >
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
            style={{ width: '100%', marginTop: 5, marginBottom: 10 }}
            size={'large'}
            placeholder="Select Bank"
            optionFilterProp="children"
            onChange={this.onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
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
            placeholder="Bank Account Number"
            className="form-control"
          />
          <input
            type="number"
            name="amount"
            disabled
            value={this.state.transaction.amount}
            onChange={this.handleChange}
            placeholder="Enter Amount"
            className="form-control"
          />

          {/* <Button style={{ border: "none" }}>SEND</Button> */}
        </AntModal>
        <TrackModal
          show={this.state.trackBanner}
          onClose={this.closeTrackModal}
        />
        <StripeModal
          show={this.state.stripeModal}
          close={this.closeStripModal}
          initState={this.state.transaction}
        />
      </>
    );
  }
}

export default MainBanner;