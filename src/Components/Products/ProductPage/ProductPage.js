import React from 'react';
import {prodcutInfo} from './data';
import ProSerLayout from '../../ProSerLayout/ProSerLayout';

const ProductPage = (props) =>{
    let page = props.match.params.productName;
    return <ProSerLayout {...prodcutInfo[page]} />
}

export default ProductPage;