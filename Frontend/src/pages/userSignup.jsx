import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    console.log("User Signup Data:", {
      username: { firstname, lastname },
      email,
      password,
    });
    // Clear form fields
    setEmail('');
    setFirstname('');
    setLastname('');
    setPassword('');
  };

  return (
    <div
      className="relative min-h-screen bg-[url('https://media.istockphoto.com/id/1226532587/photo/a-city-crossing-with-a-semaphore-red-light-in-semaphore.jpg?s=612x612&w=0&k=20&c=wFre7dWkGLPk7r3O9g9TMRYhEmbiMSG6bExXsUAw8v4=')] bg-cover bg-center flex items-center justify-center p-4"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <img
          src="https://imgs.search.brave.com/uSjw4c4PJVcUaXz_uADumF4rIJ0g2gbQG46CQUzq-WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NDA5OTA0NC92ZWN0/b3IvdGF4aS1zdGFu/ZC1oZXJlLWxvY2F0/aW9uLW1hcmtlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UkZhNE1XUFVBMkQ2/dVVuV0xpVUUzNm5Z/Y1JxdmdMd2Z1aUNr/cTZsRFZvRT0"
          alt="Logo"
          className="w-32 h-32 mb-6 rounded-full shadow-lg"
        />

        {/* Signup Form Card */}
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-md w-full max-w-md">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                What's your name
              </h3>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                What's your email
              </h3>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Enter Password
              </h3>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
            >
              Sign Up
            </button>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <p>Already have an account?</p>
              <Link to="/userLogin" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>

        {/* Consent Notice */}
        <div className="mt-4">
          <p className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-200">
            By proceeding you consent to making calls, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
