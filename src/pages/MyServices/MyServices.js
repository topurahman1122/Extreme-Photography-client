import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';

const MyServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://photography-website-server.vercel.app/threeServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='text-center font-bold text-5xl text-indigo-600 my-8'>All My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 my-6'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Link to='/services'><button className="btn btn-outline btn-primary">Show All Service</button></Link>
            </div>
        </div>
    );
};

export default MyServices;