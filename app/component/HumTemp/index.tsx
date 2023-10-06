import React from 'react';
import { FaBell, FaUserAlt, FaTemperatureHigh } from 'react-icons/fa';

const Dashboards = () => {
  return (
    <div className='ml-36 mb-32'>
      <div className='icons fixed top-4 right-10 flex'>
        <FaUserAlt className='text-custom-color text-2xl mx-2' />
        <FaBell className='text-custom-color text-2xl mx-2' />
      </div>

      <h1 className='font-bold text-custom-orange mt-10 ml-60 text-2xl'>Overview</h1>
      <div className='Overview flex flex-row justify-center gap-4 h-10 -ml-24'>
        <div className='Rectangle1 w-[370px] h-[125px] bg-custom-orange rounded-2xl border flex flex-col justify-center items-center'>
          <div className='OptimumTemperature text-custom-color text-[17px] font-bold font-Poppins flex items-center'>
            <FaTemperatureHigh className='mb-1 mr-2 inline text-2xl h-[52px] w-[52px] text-custom-color' />
            Optimum Temperature
          </div>
          <p className='36DegreesCelsius text-custom-white text-sm font-semibold font-Poppins mb-0 ml-16 mt-[-12px] text-white'>
            32-36 Degrees Celsius
          </p>
        </div>

        <div className='Rectangle2 w-[370px] h-[125px] bg-custom-color rounded-2xl border flex flex-col justify-center items-center'>
          <div className='OptimumTemperature text-custom-orange text-[17px] font-bold font-Poppins flex items-center'>
            <FaTemperatureHigh className='mb-1 mr-2 inline text-2xl h-[52px] w-[52px] text-custom-orange' />
            Optimum Temperature
          </div>
          <p className='36DegreesCelsius text-custom-white text-sm font-semibold font-Poppins mb-0 ml-16 mt-[-12px] text-white'>
            32-36 Degrees Celsius
          </p>
        </div>

        <div className='Rectangle3 w-[370px] h-[125px] bg-custom-color rounded-2xl border flex flex-col justify-center items-center'>
          <div className='OptimumHumidity text-custom-orange text-[17px] font-bold font-Poppins flex items-center ml-4'>
            <FaTemperatureHigh className='mb-1 mr-2 inline text-2xl h-[52px] w-[52px] text-custom-orange' />
            Optimum Humidity
          </div>
          <p className='70DegreesCelsius text-custom-white text-sm font-semibold font-Poppins mb-0 ml-16 mt-[-12px] text-white'>
            50-70 Degrees Celsius
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboards;
