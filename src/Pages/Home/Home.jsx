import React from 'react';
import Navbar from '../../Components/Navbar';
import About from './About';
import Hero from './Hero';
import UpcommingEvent from './UpcommingEvent';

const Home = () => {
    return (
        <div>
           
          <Hero/>
           <UpcommingEvent/>
           <About/>
        </div>
    );
};

export default Home;