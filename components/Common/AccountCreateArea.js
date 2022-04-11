import React, { Component } from 'react';
import Link from 'next/link';

class AccountCreateArea extends Component {
    render() {
        return (
            <div className="account-create-area">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>Make your first transaction now!</h2>
                            {/* <p>Get your Haiper account today!</p> */}
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="create-account">
                                <Link href="#">
                                    <a className="btn btn-primary">Send Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountCreateArea;