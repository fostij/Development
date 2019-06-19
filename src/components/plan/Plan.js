import React from 'react';
import '../../components/plan/Plan.scss';


export const Plan = () => {
    return(
        <section className="plan">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <h2 className = "services__title">Pricing Plan</h2>
                        <p className = "services__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                </div>
                <div className="row card justify-content-around">
                    <div className="col-xl-4">
                        <div className="card__overlay">
                          <div className="card__description">
                            <h5>Free Trail</h5>
                            <sup>$</sup>00<sub> per month</sub>
                          </div>
                           <div className="card__list">
                                <ul>
                                    <li><a href="">30 Free Trail</a></li>
                                    <li><a href="">5 Free Projects</a></li>
                                    <li><a href="">PHP 5 Enabled</a></li>
                                    <li><a href="">24/7 Suports</a></li>
                                </ul>
                           </div>
                            <div className="card__button">
                              <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card__overlay">
                            <div className="card__description">
                                <h5>Basic</h5>
                                <sup>$</sup>50<sub> per month</sub>
                            </div>
                            <div className="card__list">
                                <ul>
                                    <li><a href="">30 Free Trail</a></li>
                                    <li><a href="">5 Free Projects</a></li>
                                    <li><a href="">PHP 5 Enabled</a></li>
                                    <li><a href="">24/7 Suports</a></li>
                                </ul>
                            </div>
                            <div className="card__button">
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card__overlay">
                            <div className="card__description">
                                <h5>Ultimates</h5>
                                <sup>$</sup>99<sub> per month</sub>
                            </div>
                            <div className="card__list">
                                <ul>
                                    <li><a href="">30 Free Trail</a></li>
                                    <li><a href="">5 Free Projects</a></li>
                                    <li><a href="">PHP 5 Enabled</a></li>
                                    <li><a href="">24/7 Suports</a></li>
                                </ul>
                            </div>
                            <div className="card__button">
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};