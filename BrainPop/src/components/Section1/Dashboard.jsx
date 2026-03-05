import React from "react";
import Rightsection from "./Rightsection";
import { Share2, Heart, Ellipsis } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex text-white p-8 gap-8">
      {/* LEFT PANEL */}
      <div className="w-[320px] bg-[#111827] rounded-3xl p-6 flex flex-col gap-6">
        <img
          src="https://plus.unsplash.com/premium_vector-1765485232220-aaef147d4829?w=600"
          alt="Deck"
          className="rounded-2xl"
        />

        <div className="flex items-center gap-3">
          <button className="bg-purple-600 px-4 py-2 rounded-xl text-sm hover:text-purple-200">
            Browse
          </button>

          <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
            <Share2 size={18} />
          </button>

          <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
            <Heart size={18} color="#bf0d0d" />
          </button>

          <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
            <Ellipsis size={18} />
          </button>
        </div>

        <h2 className="text-xl font-semibold">Vocabulary for Beginners</h2>

        <p className="text-gray-400 text-sm">
          Start your journey into the language with this beginner-friendly
          collection.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <Rightsection />
    </div>
  );
};

export default Dashboard;
