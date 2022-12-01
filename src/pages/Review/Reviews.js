import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = ({ service }) => {
    const [reviews, setReviews] = useState([]);
    const { _id } = service;

    useEffect(() => {
        fetch(`https://photography-website-server.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    return (
        <div>
            <h1 className='text-center font-bold text-5xl my-8'>All Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;