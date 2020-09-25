import React, { useState } from 'react';
import Header from '../Header/Header';
import coxsbazar from '../../images/image/coxsbazar.png'

const Home = () => {
    const [background,setBackground] = useState(coxsbazar)
    return (
        <div style={{backgroundImage: `url(${background})`}}>
        <Header></Header>
    </div>
    );
};

export default Home;