import React from "react";
import { Brain, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white sticky top-0 z-50">

      {/* LOGO */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="bg-purple-600 p-2 rounded-full">
          <Brain size={22} />
        </div>
        <h1 className="text-xl font-bold hover:text-purple-400">
          BrainPop
        </h1>
      </div>

      {/* NAV LINKS */}
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-purple-400">
          Explore
        </a>

        {/* SEARCH BAR */}
        <div className="flex items-center bg-gray-800 px-3 py-1 rounded-lg">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search decks..."
            className="bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* PROFILE */}
      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/vector-1749532960847-0321e8e5c2c7?w=600&auto=format&fit=crop&q=60"
          alt="profile"
          className="w-9 h-9 rounded-full border border-gray-700"
        />

        <select className="bg-gray-800 text-sm px-2 py-1 rounded-lg outline-none">
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