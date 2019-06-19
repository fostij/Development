import React from 'react';
import '../../components/team/Team.scss';
import John from '../../img/john.png';
import Alexa from '../../img/alexa.png';
import Ronobir from '../../img/ronobir.png';




export const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <h2 className = "services__title">Our Team Member</h2>
                        <p className = "services__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                </div>
            </div>
            <div className="row slider justify-content-center">
                    <div className="col-xl-3 slider__items">
                        <img src={John} alt=""/>
                        <h5>John Doe</h5>
                        <p>General Manager</p>
                        <div className="slider__icons d-flex justify-content-center justify-content-around">
                            <a href="">
                                <span className="hoverSpan"><i className="fab fa-facebook-f"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-vk"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-twitter"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-instagram"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 slider__items">
                        <img src={Alexa} alt=""/>
                        <h5>Alexa Biru</h5>
                        <p>Office Director</p>
                        <div className="slider__icons d-flex justify-content-center justify-content-around">
                            <a href="">
                                <span><i className="fab fa-facebook-f"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-vk"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-twitter"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-instagram"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 slider__items">
                        <img src={Ronobir} alt=""/>
                        <h5>Ronobir sing</h5>
                        <p>Admin</p>
                        <div className="slider__icons d-flex justify-content-center justify-content-around">
                            <a href="">
                                <span><i className="fab fa-facebook-f"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-vk"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-twitter"></i></span>
                            </a>
                            <a href="">
                                <span><i className="fab fa-instagram"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className="dots">
                        <div className="dots__item"><span></span></div>
                        <div className="dots__item"><span></span></div>
                        <div className="dots__item"><span></span></div>
                    </div>
            </div>
        </section>
    );
};