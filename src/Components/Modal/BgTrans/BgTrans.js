import React from 'react';
import classes from './BgTrans.module.scss';

const BgTrans = (props) =>{
    return(
        <div className={classes.bgTrans} onClick={props.closeHandler}></div>
    );
}

export default BgTrans;