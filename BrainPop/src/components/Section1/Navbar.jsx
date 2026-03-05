import React from "react";
import { Brain } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center sticky top-0 z-1000 justify-between px-6 py-3 bg-gray-900 text-white">
      <h3 className="text-xl font-bold">
        <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
          <Brain size={256} color="#ffebeb" strokeWidth={1.25} />
        </button>
        <h1 className="ml-2 hover:text-purple-500">BrainPop</h1>
      </h3>
      <a href="#" className=" hover:text-purple-500">
        Explore
      </a>
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="px-3 py-1 rounded bg-gray-800 text-white outline-none"
      />
      <div className="flex items-center gap-2">
        <img
          src="https://images.unsplash.com/vector-1749532960847-0321e8e5c2c7?w=600&auto=format&fit=crop&q=60"
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
        <select className="bg-gray-800 text-white px-2 py-1 rounded">
          <option>Shruti Shreya</option>
          <option>Profile</option>
          <option>Settings</option>
          <option>Sign out</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
