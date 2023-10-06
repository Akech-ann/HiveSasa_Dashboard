import React from 'react';
import { FaArrowTrendUp, FaArrowDownLong } from "react-icons/fa6";

const Overview = () => {
  return (
    <div className='location mt-28 flex justify-center gap-2 ml-auto mr-52 overflow-x-hidden w-3/4'>
      <div className="Rectangle w-[280px] h-[170px]  bg-white rounded-2xl border border-yellow-900 justify-center flex flex-col items-center">
        <div className="Group57 w-[137px] h-[170.61px] relative">
          <div className="Location w-[94px] h-[17px] left-[8px] top-0 absolute  text-[18px] font-bold font-['Poppins'] text-custom-orange">Location</div>
          <div className="Nairobi w-[97px] h-3.5 left-[13px] top-[34px] absolute text-custom-color text-[15px] font-normal font-['Poppins']">Nairobi</div>
          <div className="Kajiado w-[101px] h-3.5 left-[11px] top-[66px] absolute text-custom-color text-[15px] font-normal font-['Poppins']">Kajiado</div>
          <div className="Baringo w-[103px] h-3.5 left-[10px] top-[97px] absolute text-custom-color text-[15px] font-normal font-['Poppins']">Baringo</div>
          <div className="Machakos w-[137px] h-3.5 left-0 top-[126px] absolute text-custom-color text-[15px] font-normal font-['Poppins']">Machakos</div>
        </div>
      </div>
      <div className="Rectangle w-[280px] h-[170px]  bg-white rounded-2xl border border-yellow-900 flex flex-col justify-center items-center">
        <div className="Group57 w-[137px] h-[170.61px] relative flex flex-col justify-center items-center">
          <div className="Total Hives w-[92px] h-[15px] text-center text-custom-orange text-[15px]text-[18px] font-bold font-['Poppins'] mb-auto">Total Hives</div>
          <div className="250 h-3.5 text-custom-brown text-[19px] font-bold font-['Poppins'] mt-auto mb-20">250</div>
        </div>
      </div>

      <div className="Rectangle57 w-[280px] h-[170px]  bg-white rounded-2xl border border-yellow-900 flex flex-col justify-center items-center pt-8">
        <div className="Ranges text-center text-center text-custom-orange text-[18px] font-bold font-['Poppins'] mb-2  mt-[-40px]">
          Ranges
        </div>
        <div className="text-custom-brown text-xs font-semibold font-['Poppins'] flex flex-col justify-center gap-8 items-center mt-4">
          <div className="Optimal w-[600px] h-[18px] text-center text-[12px] text-custom-color">OPTIMAL</div>
          <div className="Above w-[600px] h-[18px] text-center text-[12px] pb-4 text-custom-color">ABOVE</div>
          <div className="Below w-[600px] h-[18px] text-center text-[12px] text-custom-color">BELOW</div>
        </div>
      </div>

      <div className="Rectangle58 w-[280px] h-[170px] bg-white rounded-2xl border border-yellow-900 flex flex-col justify-center items-center pt-0">
        <div className="Regulation w-[137px] h-[13px] text-center text-custom-orange text-[18px] font-bold font-['Poppins'] mb-2 mt-[-4]">
          Regulation
        </div>
        <div className="flex items-center mb-6 text-custom-bro size">
          <FaArrowTrendUp className='text-yellow-800 text-2xl mx-2 size-10 mt-14 w-[60px] h-[72px]' />
          <FaArrowDownLong className='text-yellow-800 text-2xl mx-2 mt-14 w-[29px] h-[40px]' />
        </div>
      </div>
    </div>
  );
}

export default Overview;
