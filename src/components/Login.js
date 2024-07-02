import React, { useEffect } from 'react';
import { Input, Ripple, initTE } from 'tw-elements';
import Navbar from './components/Navbar';


const YourComponent = () => {
  useEffect(() => {
    // Initialization for ES Users
    initTE({ Input, Ripple });

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <Input
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Ripple className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogin}>
              Log In
            </Ripple>
            <Ripple className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSignUp}>
              Sign Up
            </Ripple>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YourComponent;
