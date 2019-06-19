import React from 'react';
import '../../components/contact/Contact.scss'






export const Contact = () => {
    return (
        <footer className="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <h2 className = "contact__title">Contact Us</h2>
                        <p className = "contact__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="background col-xl-4">
                        <span className='backgraund__contact d-flex justify-content-center align-items-center'><i className="fas fa-map-marker"></i></span>
                        <ul>
                            <li className='contact__list'><a className='contact__link' href="">Nobinagar savar, Dhaka</a></li>
                            <li className='contact__list'><a className='contact__link' href="">Bangladesh</a></li>
                        </ul>
                    </div>
                    <div className="background col-xl-4">
                        <span className='backgraund__contact d-flex justify-content-center align-items-center'><i className="fas fa-phone"></i></span>
                        <ul>
                            <li className='contact__list'><a className='contact__link' href="">+8801743331996</a></li>
                            <li className='contact__list'><a className='contact__link' href="">+8801928737807</a></li>
                        </ul>
                    </div>
                    <div className="background col-xl-4">
                        <span className='backgraund__contact d-flex justify-content-center align-items-center'><i className="far fa-envelope"></i></span>
                        <ul>
                            <li className='contact__list'><a className='contact__link' href="">quickmasud@gmail.com</a></li>
                            <li className='contact__list'><a className='contact__link' href="">quickmasud@yahoo.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row contact__form d-flex justify-content-center ">
                    <div className="col-xl-11">
                        <form className='form' action="">
                            <div className="input__all d-flex justify-content-around">
                                <input type="text" name="name" placeholder='First Name'/>
                                <input type="text" name="email" placeholder='Your Email'/>
                            </div>
                            <div className="form__text d-flex justify-content-center">
                                <textarea placeholder='Write Message'></textarea>
                            </div>
                            <div className="form__button d-flex justify-content-end">
                                <button type='submit'>SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};