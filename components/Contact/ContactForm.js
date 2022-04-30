import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import { postMessage } from '../../pages/api/contact';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        try {
            postMessage(contact).then(resp => {
                if (resp.status = 'success') {
                    setContact(INITIAL_STATE);
                    alertContent();
                } else {
                    MySwal.fire({
                        title: 'Server Error',
                        text: 'Something went wrong. Issue will get resolve in no time',
                        icon: 'error',
                        timer: 2000,
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    };

    return (

        <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form-control"
                                value={contact.name}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.name && 'Please enter your name'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                value={contact.email}
                                onChange={handleChange}
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.email && 'Please enter your email'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className="form-control"
                                value={contact.phone}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.phone && 'Please enter your number'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="form-control"
                                value={contact.subject}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.subject && 'Please enter your number'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea
                                name="message"
                                cols="30"
                                rows="5"
                                placeholder="Write your message..."
                                className="form-control"
                                value={contact.message}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.message && 'Write your message'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                        <button type="submit" style={{ border: 'none' }} className="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;