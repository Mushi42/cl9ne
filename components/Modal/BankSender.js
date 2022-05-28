import React from 'react';
import CustomModal from "../Modal";

const BankSender = ({
    visible,
    onCancel,
    onOk,
    transaction,
    handleChange,
}) => {
    return (

        <CustomModal
            visible={visible}
            title="Bank - Sender Information"
            onCancel={onCancel}
            okType={'ghost'}
            onOk={onOk}
            okText="Next"
        >
            <input
                type="text"
                name="name"
                required
                value={transaction.sender.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="form-control"
            />
            <input
                type="number"
                name="phone"
                required
                value={transaction.sender.phone}
                onChange={handleChange}
                placeholder="Enter Phone No."
                className="form-control"
            />
            <input
                type="email"
                required
                name="email"
                value={transaction.sender.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="form-control"
            />
        </CustomModal>

    );
};

export default BankSender;