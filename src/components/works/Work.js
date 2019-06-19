import React from 'react';
import '../works/Work.scss';
import watch from '../../img/watch.png';
import onedey from '../../img/onedey.png';
import frank from '../../img/frank.png';
import perfume from '../../img/perfume.png';
import drink from '../../img/drink.png';
import bag from '../../img/bag.png';


export const Work = () => {
    return(
        <section className="work">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <h2 className = "services__title">Latest Works</h2>
                        <p className = "services__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <button className="work__button">ALL</button>
                        <button className="work__button">WEB DESIGN</button>
                        <button className="work__button">UI/UX DESIGN</button>
                        <button className="work__button">MOCKUPS</button>
                    </div>
                </div>
                <div className="row work__top">
                    <div className="filter col-xl-4">
                        <img className="work__img" src={watch} alt="works"/>
                        <div className="work__text">
                            <h5>Hand Watch</h5>
                            <p>ui/ux design</p>
                        </div>
                    </div>
                    <div className="filter col-xl-4">
                        <img className="work__img" src={onedey} alt="works"/>
                        <div className="work__text">
                            <h5>Hand Watch</h5>
                            <p>ui/ux design</p>
                        </div>
                    </div>
                    <div className="filter col-xl-4">
                        <img className="work__img" src={frank} alt="works"/>
                        <div className="work__text">
                            <h5>Hand Watch</h5>
                            <p>ui/ux design</p>
                        </div>
                    </div>
                </div>
                <div className="row work__bottom">
                    <div className="filter col-xl-4">
                        <img className="work__img" src={perfume} alt="works"/>
                        <div className="work__text">
                            <h5>Hand Watch</h5>
                            <p>ui/ux design</p>
                        </div>
                    </div>
                    <div className="filter col-xl-4">
                        <img className="work__img" src={drink} alt="works"/>
                        <div className="work__text">
                            <h5>Hand Watch</h5>
                            <p>ui/ux design</p>
                        </div>
                    </div>
                    <div className="filter col-xl-4">
                        <img className="work__img" src={bag} alt="works"/>
                        <div className="work__text">
                            <h5>Hand Watch</h5>
                            <p>ui/ux design</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <button className="work__button">VIEW ALL</button>
                    </div>
                </div>
            </div>
        </section>
    );
}