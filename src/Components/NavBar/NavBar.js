import React from 'react';
import classes from './NavBar.module.scss';
import withSizes from 'react-sizes';
import DesNav from './DesNav/DesNav';
import MobNav from './MobNav/MobNav';


const NavBar = (props) =>{
    let displayNav = <MobNav />;
    let buttomNav = null;
    if(!props.isMobile){
    displayNav = <DesNav />;
    buttomNav = <>
                    <hr />
                    <ul className={classes.botNav}>
                        <li>
                            <a href="/" target="_blank">info@dnsh-trading.com</a>
                        </li>
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
                </>
    }
        return(
            <div className={classes.background}>
                <nav className={classes.navBar}>
                    <figure className={classes.logoImg}>
                        <div>
                            <img src={require('../_assets/imgs/Logo.png')} alt="" />
                        </div>
                        <figcaption>
                            <h2>DNSH-Trading GmbH</h2>
                        </figcaption>
                    </figure>
                    {displayNav}
                </nav>
                {buttomNav}
            </div>
    );
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 850,
});
export default withSizes(mapSizesToProps)(NavBar);