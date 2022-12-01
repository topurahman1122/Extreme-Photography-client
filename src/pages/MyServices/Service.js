import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../hooks/useTitle';

const Service = ({ service }) => {
    const { _id, about, name, picture, price } = service;
    const { user } = useContext(AuthContext);
    useTitle(`${name}`)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img src={picture} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                        </PhotoView>
                    </PhotoProvider>
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{about}</p>
                        <h1 className="text-3xl font-semibold mb-6 text-rose-700">Price : ${price}</h1>
                        {
                            user?.email ? <Link to={`/addreview/${_id}`}><button className="btn btn-primary">Add a review</button></Link>
                                :
                                <Link to='/login'><button className="btn btn-primary">Log in first and give a review</button></Link>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;