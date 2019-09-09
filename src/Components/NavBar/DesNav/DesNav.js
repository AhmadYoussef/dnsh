import React from 'react';
import classes from './DesNav.module.scss';
import {NavLink} from "react-router-dom";

const DesNav = (props) =>{
    return (
        <>
            <ul className={classes.desNav}>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li className={classes.dropMenu}>
                    <NavLink to="/products" >Products</NavLink>
                    <ul>
                        <li><NavLink to="/products/animalHealth">Animal Health</NavLink></li>
                        <li><NavLink to="/products/feedAdditives" >Feed Additives</NavLink></li>
                        <li><NavLink to="/products/premixes" >PREMIXES</NavLink></li>
                    </ul>
                </li>
                <li className={classes.dropMenu}>
                    <NavLink to="/services" >Service</NavLink>
                    <ul>
                        <li><NavLink to="/services/poulFarmSolutions" >Poultry farm solutions</NavLink></li>
                        <li><NavLink to="/services/feedSolutions" >Feed solutions</NavLink></li>
                        <li><NavLink to="/services/renewGreenEnergy" >Renewable green energy</NavLink></li>
                        <li><NavLink to="/services/feedManufactSolutions" >Feed Manufacturing Solution</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
            </ul>
        </>
    );
}

export default DesNav;