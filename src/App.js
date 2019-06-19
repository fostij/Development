import React from 'react';
import './App.scss';
import './scss/reset.scss';
import './scss/fonts.scss';
import { Header } from './components/header/Header';
import { ContentHeader } from './components/contentHeader/ContentHeader';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Work } from './components/works/Work';
import { Plan } from './components/plan/Plan';
import { Team } from './components/team/Team';
import { Contact } from './components/contact/Contact';
import { Rights } from './components/rights/Rights';


export default () => {
    return (
        <div className="App">
            <Header />
            <ContentHeader />
            <About />
            <Services />
            <Work />
            <Plan />
            <Team />
            <Contact />
            <Rights />
        </div>
    );
}
