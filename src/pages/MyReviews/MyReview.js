import React from 'react';
import { Link } from 'react-router-dom';

const MyReview = ({ myReview, handelDelete }) => {
    const { _id, serviceName, reviewText, time } = myReview;
    return (
        <div>
            <div className="card w-96 bg-cyan-100 text-gray-900">
                <div className="card-body ">
                    <div className='flex justify-between'>
                        <h2 className="card-title text-pink-700">{serviceName}</h2>
                        <h2 className="card-title text-xs font-bold text-indigo-700">Time : {time}</h2>
                    </div>
                    <p className=' font-bold text-xs text-left'>{reviewText}</p>

                    <div className="card-actions justify-between">
                        <Link to={`/update/${_id}`}><button className="btn btn-outline btn-primary">Edit Review</button></Link>
                        <button onClick={() => handelDelete(_id)} className="btn btn-outline btn-ghost">Delete Review</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyReview;