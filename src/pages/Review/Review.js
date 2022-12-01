import React from 'react';

const Review = ({ review }) => {
    const { userName, email, reviewText, photoURL, time } = review
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-teal-100 text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-violet-800">{userName}</h4>
                            <span className="text-xs font-semibold text-gray-900">{email}</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-2 font-semibold text-sm text-gray-900">
                    <p>{reviewText}</p>
                </div>
                <h1 className='text-red-600 font-semibold pt-2'>Time : <span className='text-violet-700'>{time}</span></h1>
            </div>
        </div>
    );
};

export default Review;