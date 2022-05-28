import React from 'react';
import CustomModal from ".";

const MobileSender = ({
    visible,
    onCancel,
    onOk,
    transaction,
    handleChange,
}) => {
    return (
        <CustomModal
            visible={visible}
            title="Mobile Top Up - Sender Information"
            onCancel={onCancel}
            okType={'ghost'}
            onOk={onOk}
            okText="Send"
        >

            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={transaction.sender.name}
                onChange={handleChange}
                className="form-control"
            />
            <input
                type="number"
                name="phone"
                value={transaction.sender.phone}
                onChange={handleChange}
                placeholder="Enter Phone No."
                className="form-control"
            />
            <input
                type="email"
                name="email"
                value={transaction.sender.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="form-control"
            />

        </CustomModal>

    );
};

export default MobileSender;