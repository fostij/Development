import React from 'react';
import './Services.scss';
// import tel from '../../../src/img/smartphone.png';

export const Services = () => {
    return(
        <section className="services">
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <h2 className = "services__title">Us Services</h2>
                            <p className = "services__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                        </div>
                </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4">
                            <div className="inform__content">
                                <i className="inform__icons fas fa-mobile"></i>
                                <h4 className="services__h4">Research</h4>
                                <p className= "inform__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="inform__content">
                                <i className="inform__icons fas fa-mobile"></i>
                                <h4 className="services__h4">Portfolio</h4>
                                <p className= "inform__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="inform__content">
                                <i className="inform__icons fas fa-mobile"></i>
                                <h4 className="services__h4">Support</h4>
                                <p className= "inform__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                    </div>
                <div className="row justify-content-center">
                        <div className="col-xl-4">
                            <div className="inform__content">
                                <i className="inform__icons fas fa-mobile"></i>
                                <h4 className="services__h4">Documentation</h4>
                                <p className= "inform__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="inform__content">
                                <i className="inform__icons fas fa-mobile"></i>
                                <h4 className="services__h4">Development</h4>
                                <p className= "inform__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="inform__content">
                                <i className="inform__icons fas fa-mobile"></i>
                                <h4 className="services__h4">Design</h4>
                                <p className= "inform__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                      </div>
                    </div>
        </section>
    );
};