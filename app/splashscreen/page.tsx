
"use client"
// components/SplashScreen.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-custom-orange transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-white text-center">
      <Image src="/images/logo.png" alt="Logo" width={600} height={800} className="max-w-xs mx-auto -mt-20" />

        <h1 className="text-2xl mt-4 text-custom-color">Save the Bees</h1>
        <p className='text-2xl mt-4'>Honeybees may hold the secret to the fountain of youth, as they are the only creatures that do not age</p>
      </div>
    </div>
  );
};

export default SplashScreen;
