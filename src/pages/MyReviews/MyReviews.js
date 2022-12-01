import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {

    const { user, logout } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Reviews')

    useEffect(() => {
        fetch(`https://photography-website-server.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('exPhotography-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout();
                }
                return res.json();
            })
            .then(data => setMyReviews(data))
    }, [user?.email, logout]);

    const handelDelete = (id) => {
        const agree = window.confirm('Are You sure to delete review?');
        if (agree) {
            fetch(`https://photography-website-server.vercel.app/review/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Ticket Canceled successfully!')
                        const remaining = myReviews.filter(mr => mr._id !== id);
                        setMyReviews(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='text-center font-bold text-5xl mt-10'>ALL My Reviews : {myReviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-10'>
                {
                    myReviews.map(myReview => <MyReview
                        key={myReview._id}
                        myReview={myReview}
                        handelDelete={handelDelete}
                    ></MyReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;