import React from 'react';
import classes from './Services.module.scss';
import {NavLink} from 'react-router-dom';

const Servers =  (props) =>{
    return(
        <main className={classes.servicesContanier}>
            <section className={classes.services}>
            <div className={classes.servicesPageInfo}>
                <h1>Services</h1>
                <p>We will help you</p>
            </div>
            <article className={classes.servicesCollection}>
                <figure>
                    <div className={classes.serviceImg}>
                        <img src={require('../_assets/Icons/feedSolutionsblue.svg')} alt="feed solution img" />
                    </div>
                    <figcaption>
                        <h3>Feed solutions</h3>
                        <p>Find solutions for manufacturing errors</p>
                        <NavLink className={classes.greenBtn} to="/services/feedSolutions">Read More</NavLink>
                    </figcaption>
                </figure>
                <figure>
                    <div className={classes.serviceImg}>
                        <img src={require('../_assets/Icons/FeedManufacturingSolutionblue.svg')} alt="feed solution img" />
                    </div>
                    <figcaption>
                        <h3>Feed Manufacturing Solution</h3>
                        <p>Finding solutions for problems of feed industry</p>
                        <NavLink className={classes.greenBtn} to="/services/feedManufactSolutions">Read More</NavLink>
                    </figcaption>
                </figure>
                <figure>
                    <div className={classes.serviceImg}>
                        <img src={require('../_assets/Icons/PoultryFarmSolutionsblue.svg')} alt="feed solution img" />
                    </div>
                    <figcaption>
                        <h3>Poultry farm solutions</h3>
                        <p>The modern poultry industry aims at high production and better quality at a low cost.</p>
                        <NavLink className={classes.greenBtn} to="/services/poulFarmSolutions">Read More</NavLink>
                    </figcaption>
                </figure>
                <figure>
                    <div className={classes.serviceImg}>
                        <img src={require('../_assets/Icons/RenewableGreenEnergyblue.svg')} alt="feed solution img" />
                    </div>  
                    <figcaption>
                        <h3>Renewable green energy</h3>
                        <p>Energy is a major key success factor for every poultry farm, it plays a crucial role in poultry business.</p>
                        <NavLink className={classes.greenBtn} to="/services/feedManufactSolutions">Read More</NavLink>
                    </figcaption>
                </figure>
            </article>
            </section>
        </main>
    );
}

export default Servers;
