'use client'
import React, { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useLogin from "../hooks/useCreateLogin";
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";
import Image from 'next/image';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [token, setToken] = useState("");
  const { user, handleSignin } = useLogin({
      email: email,
      password: password,
    });
    const router = useRouter();
// nmnbnmnbnnb
  useEffect(() => {
    setPasswordVisible(false);
  }, []);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setFormError("");
    if (/^\S+@\S+\.\S+$/.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format.");
    }
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setFormError("");
    if (value.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError("Password should be at least 6 characters");
    }
  };
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setFormError("All fields are required.");
    }
    await handleSignin();
    console.log({user});
  };
  console.log('tewagi',user);
  return (
    <div className="flex flex-col sm:flex-row h-screen font-poppins text-xl w-screen">
      <div className="bg-custom-orange sm:w-1/3 flex justify-center items-center">
      <Image src="/images/logo.png" alt="Logo" width={400} height={50} />
      </div>
      <div className="w-full bg-white flex flex-col justify-center items-center p-6 sm:w-2/3 sm:p-12">
        <p className="text-center text-3xl font-['Poppins'] font-semibold text-[#F59B22] w-1/ mb-8">
          Login
        </p>
        <p className="text-center text-3xl font-['Poppins'] font-semibold text-[#F59B22] w-1/ mb-20">
          Welcome back!
        </p>
        <form className="flex flex-col items-center w-full sm:w-120" onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-6 w-2/3">
            <label className="text-lg font-bold text-custom-color" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-16 border rounded px-4 py-2 mb-4 ${emailError ? "border-red-500" : ""
                }`}
              onChange={handleEmailChange}
              value={email}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div className="relative mb-4 sm:mb-6 w-2/3">
            <label className="text-lg font-bold text-custom-color" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter Password"
              className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-16 border rounded px-4 py-2 mb-4 ${passwordError ? "border-red-500" : ""
                }`}
              onChange={handlePasswordChange}
              value={password}
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
              onClick={togglePasswordVisibility}
              style={{ marginTop: "10px" }}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <button
              type="submit"
              className="bg-[#F59B22] text-white w-40 h-16 rounded-[50px] font-bold"
            >
              Sign in
            </button>
        </form>
        {formError && (
          <p className="text-red-500 text-sm mb-4 w-2/3">{formError}</p>
        )}
        <p className="text-center text-lg font-light text-custom-color w-full sm:w-1/2 mx-auto sm:ml-0 lg:ml-72">
          Dont have an account?{` `}
          <Link href="/registration">
            <span className="font-['Poppins'] font-bold">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;