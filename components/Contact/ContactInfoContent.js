import React, { Component } from 'react';

class ContactInfoContent extends Component {
    render() {
        return (
            <div className="contact-info">
                <ul>
                    {/* <li>
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <span>Address</span>
                        27 Division St, New York, NY 10002, USA
                    </li> */}

                    <li>
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span>Email</span> 
                        <a href="mailto:cl9nepay@gmail.com">cl9nepay@gmail.com</a>  
                        {/* <a href="mailto:fax@haiper.com">fax@haiper.com</a> */}
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <span>Phone</span> 
                        <a href="tel:+1(205)406-6578">+1 (205) 406-6578</a>
                        {/* <a href="tel:+1-212-9876543">+1-212-9876543</a> */}
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactInfoContent;