import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Review/Reviews';
import Service from './Service';

const ServiceDetail = () => {
    const service = useLoaderData()
    return (
        <div>
            {
                <Service service={service}></Service>
            }
            {
                <Reviews service={service}></Reviews>
            }
        </div>
    );
};

export default ServiceDetail;