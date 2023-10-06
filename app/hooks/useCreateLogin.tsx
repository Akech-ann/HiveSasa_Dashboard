'use client'
import { useState } from 'react';
import { loginUser } from '../Utilities/utils';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
interface LoginData {
  email: string;
  password: string;
}
const useLogin = (initialLoginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState({token:''});
  const handleSignin = async () => {
      const response = await loginUser(initialLoginData)
      if (response.token.length>0) {
        Cookies.set('isLoggedToken',response.token);
        router.push('/dashboard');
      }  else {
        router.push('/login');
      }
      setUser(response)
}
return { user, handleSignin };
}
export default useLogin;