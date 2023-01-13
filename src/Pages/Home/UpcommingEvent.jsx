import React from 'react';

const UpcommingEvent = () => {
    return (
        <div className="p-10 md:px-24 w-3/4 mx-auto mt-[-80px] ab py-14 rounded-xl bg-[#292828b2]   shadow-[#4012596f] shadow-lg">
        <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
        <h2 className="text-center text-2xl lg:text-6xl tracking-tighter font-bold">Coming on  
                  <br className="sm:hidden"/><span className="text-accent"> 23 </span>September </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                  <span>Plus free shipping! Use code:</span>
                  <span className="font-bold text-lg"></span>
              </div>
              <a href="#" rel="noreferrer noopener"><button>Shop Now</button></a>
  
          </div>
        </div>


      </div>
    );
};

export default UpcommingEvent;