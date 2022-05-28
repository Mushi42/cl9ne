import React from 'react';
import CustomModal from "../Modal";
import { Select, Modal as AntModal } from 'antd';
const { Option } = Select;

const BankReciever = ({
  visible,
  onCancel,
  onOk,
  transaction,
  handleReciever,
  handleChange,
  banks,
}) => {
  return (

    <CustomModal
      show={visible}
      title="Bank - Reciever Information"
      close={onCancel}
      okType={'ghost'}
      onOk={onOk}
      okText="Send"
    >
      <input
        type="text"
        name="name"
        required
        value={transaction.receiver.name}
        onChange={handleReciever}
        placeholder="Enter Name"
        className="form-control"
      />
      <input
        type="number"
        name="phone"
        value={transaction.receiver.phone}
        onChange={handleReciever}
        placeholder="Enter Phone No."
        className="form-control"
      />

      <Select
        showSearch
        style={{ width: '100%', marginTop: 5, marginBottom: 10 }}
        size={'large'}
        placeholder="Select Bank"
        optionFilterProp="children"
        onChange={handleChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      >
        {banks.map((el) => (
          <Option value={el.value}>{el.name}</Option>
        ))}
      </Select>
      <input
        type="text"
        name="IBAN"
        value={transaction.receiver.IBAN}
        onChange={handleReciever}
        placeholder="Account IBAN Number"
        className="form-control"
      />
      <input
        type="number"
        name="amount"
        disabled
        value={transaction.amount}
        onChange={handleChange}
        placeholder="Enter Amount"
        className="form-control"
      />
    </CustomModal>

  );
};

export default BankReciever;