import React from 'react';
import {serviceInfo} from './data';
import ProSerLayout from '../../ProSerLayout/ProSerLayout';

const ServicePage = (props) =>{
    let page = props.match.params.serviceName;
    return (
        <ProSerLayout {...serviceInfo[page]} />
    );
}

export default ServicePage;