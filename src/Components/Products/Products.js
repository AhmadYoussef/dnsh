import React from 'react';
import classes from './Products.module.scss';
import {NavLink} from 'react-router-dom';

const Products =  (props) =>{
    return(
        <main className={classes.products}>
            <section>
                <article className={classes.pageInfo}>
                    <h1>Was wir anbieten</h1>
                    <p>Während Sie auf unserer Seite sind, sollten Sie unbedingt einen Blick auf unseren Bestand werfen. Unser/e Vitamin- and Nahrungsergänzungs-Geschäft ist stolz darauf, eine beispiellose Auswahl an Produkten anbieten zu können. Wenn Sie nicht das finden können, wonach Sie suchen, melden Sie sich noch heute bei uns.</p>
                </article>
                <article className={classes.productsFig}>
                    <figure>
                        <div>
                            <img src={require('../_assets/imgs/animalhealth.jpg')} alt="animal health"/>
                        </div>
                        <figcaption>
                            <h3>PREMIXES</h3>
                            <p> e suchen. Kommen Sie noch heute bei DNSH-Trading GmbH vorbei, um mehr zu erfahren.</p>
                            <NavLink className={classes.greenBtn} to="/products/animalHealth">More</NavLink>
                        </figcaption>
                    </figure>
                    <figure>
                        <div>
                            <img src={require('../_assets/imgs/animalhealth.jpg')} alt="animal health"/>
                        </div>
                        <figcaption>
                            <h3>PREMIXES</h3>
                            <p>Diese Produkte sind unsere bekanntesten und zur Zeit in unserem Geschäft erhältlich. Dank unserer umfassenden Auswahl können Sie sicher sein, das zu finden, was Sie suchen. Kommen Sie noch heute bei DNSH-Trading GmbH vorbei, um mehr zu erfahren.</p>
                            <NavLink className={classes.greenBtn} to="/products/feedAdditives" >More</NavLink>
                        </figcaption>
                    </figure>
                    <figure>
                        <div>
                            <img src={require('../_assets/imgs/animalhealth.jpg')} alt="animal health"/>
                        </div>
                        <figcaption>
                            <h3>PREMIXES</h3>
                            <p> Geschäft erhältlich. Dank unserer umfassenden Auswahl können Sie sicher sein, das zu finden, was Sie suchen. Kommen Sie noch heute bei DNSH-Trading GmbH vorbei, um mehr zu erfahren.</p>
                            <NavLink className={classes.greenBtn} to="/products/premixes">More</NavLink>
                        </figcaption>
                    </figure>
                </article>
            </section>
        </main>
    );
}

export default Products;