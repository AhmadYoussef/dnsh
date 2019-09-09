import React from 'react';
import classes from './Footer.module.scss';


const Footer = (props) =>{
    return(
        <footer className={classes.footer}>
            <h1>DNSH-Trading GmbH</h1>
            <a href="/"><small>info@dnsh-trading.com</small></a>
            <p><small>Halsbrückerstraße 34, 09599 Freiberg</small></p>
            <ul className={classes.icons}>
                <li>
                    <a href="/" target="_blank"><img src={require('../_assets/Icons/facebook.svg')} alt="facebook" /></a>
                </li>
                <li>
                    <a href="/" target="_blank"><img src={require('../_assets/Icons/twit.svg')} alt="tiwiter" /></a>
                </li>
                <li>
                    <a href="/" target="_blank"><img src={require('../_assets/Icons/linkedin.svg')} alt="linkedin" /></a>
                </li>
            </ul> 
            <div><small>©2019 DNSH-Trading.</small></div>
        </footer>
    );
}

export default Footer;