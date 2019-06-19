import React from 'react';
import './ContentHeader.scss';

export const ContentHeader = () => {
    return(
        <section className="development">
            <div className="container">
                <div className="row">
                    <div className="development__content col-lg-12 col-xl-12">
                            <h1 className = "development__title">Web development project</h1>
                            <p className = "development__text">Very suitable to support all web development projects</p>
                        <div className="development__button d-flex justify-content-center">
                            <button className = "button button_empty">OUR SERVICES</button>
                            <button className = "button button_full">HIRE IS NOW</button>
                        </div>
                    <div className="development__next">
                        <i className="fas fa-angle-down"></i>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};