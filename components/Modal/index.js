import React from 'react';
import { Modal } from 'antd';

const ModalComponent = ({
  title = 'Please add Model Title',
  children,
  show,
  close,
}) => {
  return (
    <Modal title={title} visible={show} onCancel={close} footer={null}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
