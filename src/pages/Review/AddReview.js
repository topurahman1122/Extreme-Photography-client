import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const { _id, name } = data;
    useTitle('Add Reviews')

    const handelReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const reviewText = form.review.value;
        const time = form.time.value

        const review = {
            serviceId: _id,
            serviceName: name,
            userName,
            email,
            photoURL,
            reviewText,
            time
        }


        fetch('https://photography-website-server.vercel.app/review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Placed!')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <section className="p-6 m-10 rounded-lg bg-gray-200 text-gray-900">
                <form onSubmit={handelReview} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-cyan-200">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Add A Review</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input id="name" type="text" name='name' placeholder="Name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" readOnly defaultValue={user?.email} type="email" placeholder="Email" name='email' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="review" className="text-sm">Add Review</label>
                                <textarea id="review" name='review' placeholder="Add Review" className="w-full rounded-md p-4 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="photoURL" className="text-sm">Photo URL</label>
                                <input id="photoURL" name='photoURL' type="url" placeholder="Photo URL" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="time" className="text-sm">Time</label>
                                <input id="time" name='time' type="time" placeholder="Time" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                        </div>
                    </fieldset><input className='btn btn-outline  btn-block' type="submit" value="Add Review" />
                </form>
            </section>
        </div>
    );
};

export default AddReview;