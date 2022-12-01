import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loading from '../shared/Loading/Loading';
import SingleService from './SingleService';

const TotalServices = () => {

    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    useTitle('Services');

    useEffect(() => {
        fetch('https://photography-website-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-14'>
            <h1 className='text-center font-bold text-5xl text-indigo-600 my-8'>All My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 my-6'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default TotalServices;