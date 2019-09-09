import React from 'react';
import classes from './About.module.scss';

const About =  (props) =>{
    return(
        <main className={classes.about}>
            <figure>
                <div className={classes.aboutImg}>
                    <img src={require('../_assets/imgs/aboutus.jpg')} alt="" />
                </div>
                <figcaption>
                    <h1>
                        About us
                    </h1>
                    <ul>
                        <li>
                            <h3>Our job</h3>
                            <p>DNSH is a feed additive business acting globally to support competitive animal production. Our job is to give our customers the best quality with best price to deliver Animals feed solutions to live up to their performance potential efficiently.</p>
                        </li>
                        <li>
                            <h3>Our commitment</h3>
                            <p>We are working with our partners to offer the best solutions for farms everyday challenges.<br/>
                            DNSH services contain high quality animal feeds, premixes, concentrates, additives for the animal feed industry, specific digital solutions and professional advice.</p>
                        </li>
                        <li>
                            <h3>Our approach</h3>
                            <p>Our extensive experience in poultry feed, production machinery and formulate diets, working in partnership with poultry farmers and managers across the region guarantees the production targets and results.</p>
                        </li>
                        <li>
                            <h3>Our vision</h3>
                            <p>DNSH mission is supporting our customers by providing integrated sustainable and profitable products and solutions that enable livestock farmers and growers to achieve the best possible results.</p>
                        </li>
                    </ul>
                </figcaption>
            </figure>
        </main>
    );
}

export default About;