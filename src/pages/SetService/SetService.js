import React from 'react';
import useTitle from '../../hooks/useTitle';

const SetService = () => {
    useTitle('Add Service')

    const handelService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.serviceName.value;
        const price = form.price.value;
        const about = form.about.value;
        const picture = form.photoURL.value;

        const service = {
            price,
            picture,
            name,
            about
        }
        fetch('https://photography-website-server.vercel.app/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service Placed!')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <div>
                <section className="p-6 m-10 rounded-lg bg-gray-200 text-gray-900">
                    <form onSubmit={handelService} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-lime-300">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Add A Service</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="name" className="text-sm">Service Name</label>
                                    <input id="name" name='serviceName' type="text" placeholder="Name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="price" className="text-sm">Price</label>
                                    <input id="price" name='price' type="number" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Add Description</label>
                                    <textarea id="bio" name='about' placeholder="Add Description" className="w-full rounded-md p-4 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"></textarea>
                                </div>
                                <div className="col-span-full ">
                                    <label htmlFor="photoURL" className="text-sm">Photo URL</label>
                                    <input id="photoURL" type="url" name='photoURL' placeholder="Photo URL" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                            </div>
                        </fieldset>
                        <input className='btn btn-outline  btn-block' type="submit" value="Add Service" />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default SetService;