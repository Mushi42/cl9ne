import React from 'react';
import CustomModal from "../Modal";
import { Select, Modal as AntModal } from 'antd';
const { Option } = Select;

const MobileReciever = ({
    visible,
    onCancel,
    onOk,
    transaction,
    handleReceiver,
    handleChange,
    onChange2,
    serviceProvider,
}) => {
    return (

        <CustomModal
            visible={visible}
            title="Mobile-TopUp - Reciever Information"
            onCancel={onCancel}
            okType={'ghost'}
            onOk={onOk}
            okText="Send"
        >

            <input
                type="number"
                name="phone"
                value={transaction.receiver.phone}
                onChange={handleReceiver}
                placeholder="Reciever Number"
                className="form-control"
            />
            <Select
                showSearch
                style={{ width: '100%', marginTop: 5, marginBottom: 10 }}
                size={'large'}
                placeholder="Select Bank"
                optionFilterProp="children"
                onChange={onChange2}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                }
            >
                {serviceProvider.map((el) => (
                    <Option value={el.value}>{el.name}</Option>
                ))}
            </Select>
            <input
                type="number"
                name="amount"
                disabled
                value={transaction.amount}
                onChange={handleChange}
                placeholder="Amount"
                className="form-control"
            />

        </CustomModal>


    );
};

export default MobileReciever;