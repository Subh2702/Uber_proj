import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative min-h-screen bg-[url('https://media.istockphoto.com/id/1226532587/photo/a-city-crossing-with-a-semaphore-red-light-in-semaphore.jpg?s=612x612&w=0&k=20&c=wFre7dWkGLPk7r3O9g9TMRYhEmbiMSG6bExXsUAw8v4=')] bg-cover bg-center">
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <img
          src="https://imgs.search.brave.com/uSjw4c4PJVcUaXz_uADumF4rIJ0g2gbQG46CQUzq-WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NDA5OTA0NC92ZWN0/b3IvdGF4aS1zdGFu/ZC1oZXJlLWxvY2F0/aW9uLW1hcmtlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UkZhNE1XUFVBMkQ2/dVVuV0xpVUUzNm5Z/Y1JxdmdMd2Z1aUNr/cTZsRFZvRT0"
          alt="Logo"
          className="w-32 h-32 mb-6 rounded-full border-4 border-white shadow-lg"
        />

        {/* Login Form Card */}
        <div className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-md w-full max-w-md">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <h3 className="text-lg font-medium text-gray-700">
                What's your email
              </h3>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email@example.com"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">
                Enter Password
              </h3>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
            >
              Login
            </button>
            <div className="flex justify-between items-center text-sm text-gray-200">
              <p>New here?</p>
              <Link to="/userSignup" className="text-blue-400 hover:underline">
                Create new Account
              </Link>
            </div>
          </form>
        </div>

        {/* Captain Sign In Button */}
        <div className="mt-4">
          <Link
            to="/captainLogin"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
