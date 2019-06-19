import React from 'react';
import '../header/header.scss';

    // import logo from '../../../src/components/img/logo.png';
    // import cart from '../../../src/components/img/cart.png';

export const Header = () => {
    return(
        <header className = "header">
            <div className = "container">
                <div className = "row no-gutters">
                    <div className = "header__logo col-lg-2 col-xl-2">
                        <p>Your Logo</p>
                    </div>
                    <div className = "col-lg-8 col-xl-8 ml-auto align-self-center">
                    <nav>
                        <ul className="nav d-flex justify-content-end">
                            <li className="nav__list">
                                <a className="nav__link" href="#"><i className="fas fa-home"></i></a>
                            </li>
                            <li className = "nav__list">
                                <a href="#" className = "nav__link">About</a>
                            </li>
                            <li className = "nav__list">
                                <a href="#" className = "nav__link">Servising</a>
                            </li>
                            <li className = "nav__list">
                                <a href="#" className = "nav__link">Portfolio</a>
                            </li>
                            <li className = "nav__list">
                                <a href="#" className = "nav__link">Blog</a>
                            </li>
                            <li className = "nav__list">
                                <a href="#" className = "nav__link">Contacts</a>
                            </li>
                            <li className = "nav__list">
                                <a href="#" className = "nav__search">
                                    <i className="fas fa-search"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};