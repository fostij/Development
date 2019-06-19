import React from 'react';
import '../about/About.scss';
import internet from '../../img/internet.png';
import transfer from '../../img/transfer.png';
import head from '../../img/head.png'


export const About = () => {
    return(
        <section className="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <h2 className= "about__title">About Us</h2>
                            <p className= "about__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                    </div>
                     <div className="items d-flex">
                        <div className="items__content col-lg-4">
                            <img src={internet} alt="internet"/>
                            <h4>Awesome Icons</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className="items__content col-lg-4">
                            <img src={transfer} alt="transfer"/>
                            <h4>One Page</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className="items__content col-lg-4">
                            <img src={head} alt="head"/>
                            <h4>Fully Responsive</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};