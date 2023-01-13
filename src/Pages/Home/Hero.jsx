import React from 'react';
import About from './About';
import UpcommingEvent from './UpcommingEvent';

const Hero = () => {
    return (
        <>
        <div className={`bg-[url('https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg')]  w-full h-auto mt-[-180px]  -z-10`}>
            <div className='mt-24 h-auto lg:w-3/4 mx-auto '>
            <div className="container flex flex-col justify-center mx-auto py-12 lg:py-24 lg:flex-row lg:justify-evenly">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">A Perfect 
				<span className="text-accent">{" "}Place To Start {" "}</span>Your Journey!
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Learn Different Topics Form The Best Teacher's.
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" to='/register'><button title='Register Now'></button></a>
				<a rel="noopener noreferrer" to='/courses/0'><button  title="See The Courses"></button></a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="object-contain rounded-md h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
            </div>  
           
     
        </div>
            </>
            
    );
};

export default Hero;