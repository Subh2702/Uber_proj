import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1226532587/photo/a-city-crossing-with-a-semaphore-red-light-in-semaphore.jpg?s=612x612&w=0&k=20&c=wFre7dWkGLPk7r3O9g9TMRYhEmbiMSG6bExXsUAw8v4=')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Card */}
      <div className="relative z-10 bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-xl flex flex-col items-center space-y-6">
        <img
          src="https://imgs.search.brave.com/uSjw4c4PJVcUaXz_uADumF4rIJ0g2gbQG46CQUzq-WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NDA5OTA0NC92ZWN0/b3IvdGF4aS1zdGFu/ZC1oZXJlLWxvY2F0/aW9uLW1hcmtlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UkZhNE1XUFVBMkQ2/dVVuV0xpVUUzNm5Z/Y1JxdmdMd2Z1aUNr/cTZsRFZvRT0"
          alt="Uber Logo"
          className="w-24 h-24 object-cover rounded-full border-4 border-gray-300"
        />
        <h2 className="text-gray-800 text-3xl font-semibold">
          Get Started with Uber
        </h2>
        <Link
          to="/userLogin"
          className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
