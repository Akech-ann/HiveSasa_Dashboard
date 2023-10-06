
"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useCreatePost from "../hooks/useCreatePost";
import { createPost } from "../Utilities/utils";
import Image from 'next/image';
const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [numberOfHives, setNumberOfHives] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [numberOfHivesError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const { createNewPost, createdPost, error, isLoading } = useCreatePost();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const handleFullNameChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setFullName(value);
  };
  const handlePhoneNumberChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (/^(\+)?[0-9]*$/.test(value)) {
      setPhoneNumber(value);
      setPhoneNumberError("");
    } else {
      setPhoneNumberError("Phone number should contain digits only.");
    }
  };
  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setEmail(value);
    if (/^\S+@\S+\.\S+$/.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format.");
    }
  };
  const handleUsernameChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setUsername(value);
    if (value.trim() !== "") {
      setUsernameError("");
    } else {
      setUsernameError("Username is required.");
    }
  };
  const handleNumberOfHivesChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setNumberOfHives(value);
  };
  const handlePasswordChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError("Password should be at least 6 characters.");
    }
  };
  const handleConfirmPasswordChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value === password) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Passwords do not match.");
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      fullName.trim() === "" ||
      phoneNumber.trim() === "" ||
      email.trim() === "" ||
      username.trim() === "" ||
      numberOfHives.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setFormError("All fields are required.");
    } else if (
      phoneNumberError === "" &&
      emailError === "" &&
      usernameError === "" &&
      passwordError === "" &&
      confirmPasswordError === ""
    ) {
      try {
        const registrationData = {
          fullName,
          phoneNumber,
          email,
          username,
          numberOfHives,
          password,
          confirm_password: confirmPassword,
        };
        await createPost(registrationData);
        window.location.href = "/login";
      } catch (error) {
        console.error("Error registering user:", error);
        setFormError("Error registering user. Please try again later.");
      }
    } else {
      setFormError("Please input the correct credentials.");
    }
  };
  return (
    <div className="flex flex-col sm:flex-row h-screen text-xl w-screen">
      <div className="bg-custom-orange sm:w-1/3 flex justify-center items-center">
      <Image src="/images/logo.png" alt="Logo" width={400} height={50} />
      </div>
      <div className="w-full bg-white flex flex-col justify-center items-center p-6 sm:w-2/3 sm:p-12">
        <h1 className="text-3xl font-semibold w-1/ mb-4 text-4xl font-bold mb-8 mt-4 text-custom-orange">
          Create an Account
        </h1>
        <form
          className="flex flex-col items-center w-full sm:w-120"
          onSubmit={handleSubmit}
        >
          <div className=" sm:mb-6 w-2/3">
            <label className="text-lg font-bold w-min text-custom-color" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter Full Name"
              className="text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-14 border rounded px-4 py-2"
              onChange={handleFullNameChange}
              value={fullName}
            />
          </div>
          <div className= "sm:mb-6 w-2/3">
            <label className="text-lg font-bold w-min text-custom-color" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="Enter Phone Number"
              className={`text-lg font-thin w-full border-solid border-custom-brown  bg-white/80 h-14 border rounded px-4 py-2 ${phoneNumberError ? "border-red-500" : ""
              }`}
              onChange={handlePhoneNumberChange}
              value={phoneNumber}
            />
            {phoneNumberError && (
              <p className="text-red-500 text-sm mt-1">{phoneNumberError}</p>
            )}
          </div>
          <div className=" sm:mb-6 w-2/3">
            <label className="text-lg font-bold w-min text-custom-color" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter Email"
              className={`text-lg font-thin w-full border-solid border-custom-brown  bg-white/80 h-14 border rounded px-4 py-2 ${emailError ? "border-red-500" : ""
              }`}
              onChange={handleEmailChange}
              value={email}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="sm:mb-6 w-2/3">
            <label className="text-lg font-bold w-min text-custom-color" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter Username"
              className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-14 border rounded px-4 py-2 ${
                usernameError ? "border-red-500" : ""
              }`}
              onChange={handleUsernameChange}
              value={username}
            />
            {usernameError && (
              <p className="text-red-500 text-sm mt-1">{usernameError}</p>
            )}
          </div>
          <div className=" sm:mb-6 w-2/3">
            <label className="text-lg font-bold w-min text-custom-color" htmlFor="numberOfHives">
              Number of Hives
            </label>
            <input
              id="numberOfHives"
              type="text"
              placeholder="Enter Number of Hives"
              className={`text-lg font-thin w-full border-solid border-custom-brown  bg-white/80 h-14 border rounded px-4 py-2 ${numberOfHivesError ? "border-red-500" : ""
              }`}
              onChange={handleNumberOfHivesChange}
              value={numberOfHives}
            />
            {numberOfHivesError && (
              <p className="text-red-500 text-sm mt-1">{numberOfHivesError}</p>
            )}
          </div>
          <div className="relative mb-2 sm:mb-6 w-2/3">
            <label className="text-lg font-bold w-min text-custom_color" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter Password"
              className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-14 border rounded px-4 py-2 ${passwordError ? "border-red-500" : ""
              }`}
              onChange={handlePasswordChange}
              value={password}
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 "
              onClick={togglePasswordVisibility}
              style={{ marginTop: "10px" }}
            >
              {passwordVisible ? (
                <FaEyeSlash
                  className="h-6 w-6 mt-6 text-gray-400 hover-text-gray-600 cursor-pointer"
                />
              ) : (
                <FaEye
                  className={`h-6 w-6 mt-6 text-gray-400 hover-text-gray-600 cursor-pointer ${passwordVisible ? "hidden" : ""
                  }`}
                />
              )}
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="relative mb-4 sm:mb-6 w-2/3">
            <label className="text-lg font-bold w-min text-custom-color" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Enter Password "
              className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-14 border rounded px-4 py-2 ${confirmPasswordError ? "border-red-500" : ""
              }`}
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 focus-outline-none"
              onClick={toggleConfirmPasswordVisibility}
              style={{ marginTop: "10px" }}
            >
              {confirmPasswordVisible ? (
                <FaEyeSlash
                  className="h-6 w-6 mt-6 text-gray-400 hover-text-gray-600 cursor-pointer"
                />
              ) : (
                <FaEye
                  className={`h-6 w-6 mt-6 text-gray-400 hover-text-gray-600 cursor-pointer ${confirmPasswordVisible ? "hidden" : ""
                  }`}
                />
              )}
            </button>
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
            )}
          </div>
          {formError && (
            <p className="text-red-500 text-sm mb-4 w-2/3">{formError}</p>
          )}
          <div className=" w-full flex justify-center">
            <button
              type="submit"
              className="bg-[#F59B22] text-white w-40 h-16 rounded-[50px] font-bold"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-lg font-light w-full text-custom-color">
          Already have an account?{" "}
          <Link href="/login">
            <span className="font-bold">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;