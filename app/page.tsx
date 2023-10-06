"use client"
import Register from './registration/page';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import Login from './login/page';
import Landingpage from './dashboard/page';
import SplashScreen from './splashscreen/page';

const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const isLoggedIn = Boolean(Cookies.get('isLoggedToken'));
    console.log({ isLoggedIn });
    isLoggedIn ? router.push('/dashboard') : router.push('/login');
    setIsUserLoggedIn(isLoggedIn);
  }, [router]); 

  return (
    <div>
      < SplashScreen />
    </div>
  );
};

export default Home;
