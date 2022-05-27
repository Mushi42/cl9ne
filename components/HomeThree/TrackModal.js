import React, { useState } from 'react';
import { findTransactionById } from '../../pages/api/transaction';
import { Modal, Alert } from 'antd';
import 'antd/dist/antd.css';

const TrackModal = ({onClose, show}) => {
  const [trackId, setTrackId] = useState('');
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [recordTran, setRecordTrans] = useState({});

  let currentYear = new Date().getFullYear();

  const trackNow = () => {
    if (trackId == '') {
      setShowAlert(true);
    } else {
      findTransactionById(trackId).then((resp) => {
        setRecordTrans(resp);
      });
    }
  };
  return (
    <>
      <Modal
        visible={show}
        title="Bank - Reciever Information"
        onCancel={onClose}
        okType={'ghost'}
        onOk={trackNow}
        okText="Track Now"
      >
        <div>
          {showAlert && (
            <Alert message="Please provide track Id" type="warning" />
          )}

          <input
            value={trackId}
            className="form-control"
            placeholder="Please type your transaction id"
            required
            onChange={(evt) => {
              setShowAlert(false);
              setTrackId(evt.target.value);
            }}
          />
        </div>

        <div>
          <p>Status : {recordTran.status}</p>
          <p>Date : {recordTran.createdAt}</p>
          <p>Amount : {recordTran.amount}</p>
        </div>
      </Modal>
    </>
  );
}

export default TrackModal
