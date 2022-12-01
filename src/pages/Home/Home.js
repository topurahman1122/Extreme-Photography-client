import React from 'react';
import useTitle from '../../hooks/useTitle';
import MyServices from '../MyServices/MyServices';
import Banner from './Banner';
import Clients from './Clients';
import Stats from './Stats';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <MyServices></MyServices>
            <Stats></Stats>
            <Clients></Clients>
        </div>
    );
};

export default Home;