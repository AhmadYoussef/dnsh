import React from 'react';
import classes from './ProSerLayout.module.scss';

const ProSerLayout = (props) =>{
    return (
        <section className={classes.serPruPage}>
            <figure style={{ backgroundImage: `url(${require('../_assets/imgs/' + props.img)})`}}>
                <figcaption>
                    <div>
                    <h2>
                    {props.title}
                    </h2>
                    {props.info}
                    </div>
                </figcaption>
            </figure>
        </section>
    );
}

export default ProSerLayout;