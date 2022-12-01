import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <h1 className='text-center text-5xl font-bold text-violet-800 mt-3'>Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 my-10'>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-cyan-700 text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">What is the difference between SQL and NoSQL?</h2>
                        <p className="mt-4 font-semibold text-gray-300">
                            The five critical differences between SQL vs NoSQL are: <br /> <br />

                            1.SQL databases are relational, NoSQL databases are non-relational. <br /> <br />
                            2.SQL databases use structured query language and have a predefined schema. <br /> <br /> NoSQL databases have dynamic schemas for unstructured data.
                            3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br /> <br />
                            4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br /> <br />
                            5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

                    </article>
                </div>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-indigo-700 text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">What is JWT, and how does it work?</h2>
                        <p className="mt-4 font-semibold text-gray-300">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                            JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                        <br />

                        <p>
                            How it works?<br /> <br />
                            1.User sign-in using username and password or google/facebook. <br /> <br />
                            2.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br /><br />
                            3.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br /> <br />
                            4. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                        </p>

                    </article>
                </div>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-violet-700 text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">What is the difference between javascript and NodeJS?</h2>
                        <p className="mt-4 font-semibold text-gray-300">
                            1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.
                            As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br /><br />
                            2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br /><br />
                            3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br /><br />
                            4. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.</p>
                    </article>
                </div>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-teal-700 text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">How does NodeJS handle multiple requests at the same time?</h2>
                        <p className="mt-4 font-semibold text-gray-300">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                            The cluster module allows easy creation of child processes that all share the same server ports.</p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blogs;