import React from 'react';
import classes from './MobNav.module.scss';
import BgTrans from '../../Modal/BgTrans/BgTrans';
import {NavLink} from "react-router-dom";

class MobNav extends React.Component{
    state ={
        isShow: false
    }
    openHandler = () =>{
        this.setState({isShow : true});
    }
    closeHandler = () =>{
        this.setState({isShow : false});
    }
    render(){
        let mobNav = [classes.mobNav];
        let bgblack = null
        if(this.state.isShow){
            mobNav.push(classes.open);
            bgblack = <BgTrans  closeHandler={this.closeHandler}/>;
        }
        return (
            <>
                <button className={classes.hamburgerBtn} onClick={this.openHandler}><img src={require('../../_assets/Icons/hamburgerBtn.svg')} alt="hamburger button"/></button>
                <div className={mobNav.join(' ')}>                
                    <button className={classes.closeBtn} onClick={this.closeHandler}><img src={require('../../_assets/Icons/closeBtn.svg')} alt="close button"/></button>
                    <ul >
                        <li>
                            <NavLink to="/" onClick={this.closeHandler}>Home</NavLink>
                        </li>
                        <li className={classes.dropMenu}>
                            <NavLink to="/products" onClick={this.closeHandler}>Products</NavLink>
                            <ul>
                                <li><NavLink to="/products/animalHealth" onClick={this.closeHandler}>Animal Health</NavLink></li>
                                <li><NavLink to="/products/feedAdditives" onClick={this.closeHandler}>Feed Additives</NavLink></li>
                                <li><NavLink to="/products/premixes" onClick={this.closeHandler}>PREMIXES</NavLink></li>
                            </ul>
                        </li>
                        <li className={classes.dropMenu}>
                            <NavLink to="/services" onClick={this.closeHandler}>Service</NavLink>
                            <ul>
                                <li><NavLink to="/services/poulFarmSolutions" onClick={this.closeHandler}>Poultry farm solutions</NavLink></li>
                                <li><NavLink to="/services/feedSolutions" onClick={this.closeHandler}>Feed solutions</NavLink></li>
                                <li><NavLink to="/services/renewGreenEnergy" onClick={this.closeHandler}>Renewable green energy</NavLink></li>
                                <li><NavLink to="/services/feedManufactSolutions" onClick={this.closeHandler}>Feed Manufacturing Solution</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={this.closeHandler}>About</NavLink>
                        </li>
                        <li><NavLink to="/contact" onClick={this.closeHandler}>Contact</NavLink></li>
                    </ul>
                </div>
                {bgblack}
            </>
        );
    }
}

export default MobNav;