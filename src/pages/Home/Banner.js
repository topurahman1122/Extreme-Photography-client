import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section>
                <div className="bg-cyan-100">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Extreme Photography</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">is a self made photography organization! I provide different type of photography services like as wildlife ,weeding ,sports ,journalism. Here i provide photo editing with photo shop experts.</p>
                        <div className="flex flex-wrap justify-center">
                            <Link to='/about'>
                                <button type="button" className="px-8 py-3 m-2 text-lg font-semibold border rounded bg-cyan-600 text-gray-50 ">About Me</button>
                            </Link>
                            <Link to='/blogs'>
                                <button type="button" className="px-8 py-3 m-2 text-lg border rounded font-semibold border-gray-700 text-gray-900">Blogs</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
            </section>
        </div>
    );
};

export default Banner;