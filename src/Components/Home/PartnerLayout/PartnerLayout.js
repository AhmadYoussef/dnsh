import React from 'react';
import classes from './PartnerLayout.module.scss';

const PartnerLayout = () =>{
    return (
        <section className={classes.partnerLayout}>
            <h1>Our Partner</h1>
            <article>
                <figure>
                    <img src={require('../../_assets/imgs/STElogo.jpg')} alt="partner logo" />
                </figure>
                <figure>
                    <img src={require('../../_assets/imgs/tekno.jpg')} alt="partner logo" />
                </figure>
            </article>
        </section>
    );
}

export default PartnerLayout;