import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData();
    const { reviewText } = review;
    console.log(reviewText)

    const handelUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const updateReview = form.updateReview.value;

        const currentReview = {
            reviewText: updateReview
        }

        fetch(`https://photography-website-server.vercel.app/reviews/${review._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated');
                    form.reset();
                }
            })

    }

    return (
        <div className='m-10'>
            <h1 className='text-center font-bold mt-6 text-5xl'>Update Review</h1>
            <form onSubmit={handelUpdate} className="form-control">
                <label className="label">
                    <span className="label-text font-bold ">Update Review</span>
                </label>
                <textarea name='updateReview' className="textarea textarea-primary textarea-bordered h-24" placeholder="Update Text"></textarea>
                <input type="submit" className='btn btn-outline btn-secondary mt-4' value="Update Review" />
            </form>
        </div>
    );
};

export default UpdateReview;