import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email, password });
    console.log("Captain Credentials:", captainData);
    setEmail('');
    setPassword('');
  };

  return (
    <div
      className="relative min-h-screen bg-[url('https://media.istockphoto.com/id/1226532587/photo/a-city-crossing-with-a-semaphore-red-light-in-semaphore.jpg?s=612x612&w=0&k=20&c=wFre7dWkGLPk7r3O9g9TMRYhEmbiMSG6bExXsUAw8v4=')] bg-cover bg-center"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <img
          src="https://imgs.search.brave.com/uSjw4c4PJVcUaXz_uADumF4rIJ0g2gbQG46CQUzq-WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NDA5OTA0NC92ZWN0/b3IvdGF4aS1zdGFu/ZC1oZXJlLWxvY2F0/aW9uLW1hcmtlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UkZhNE1XUFVBMkQ2/dVVuV0xpVUUzNm5Z/Y1JxdmdMd2Z1aUNr/cTZsRFZvRT0"
          alt="Captain Logo"
          className="w-32 h-32 mb-6 rounded-full border-4 border-white shadow-lg"
        />

        {/* Login Form Card */}
        <div className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Captain Login
          </h2>
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Email</h3>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="captain@example.com"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Password</h3>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
            >
              Sign in as Captain
            </button>

            <div className="flex justify-between items-center text-sm text-gray-200">
              <p>Not a captain?</p>
              <Link to="/userLogin" className="text-blue-400 hover:underline">
                Sign in as User
              </Link>
            </div>

            {/* Sign Up Option */}
            <div className="mt-4 text-center">
              <p className="text-gray-200">New here?</p>
              <Link
                to="/captainSignup"
                className="text-blue-400 hover:underline font-medium"
              >
                Sign up as Captain
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
