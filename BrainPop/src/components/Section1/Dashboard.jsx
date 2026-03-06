import React from "react";
import Rightsection from "./Rightsection";
import { Share2, Heart, Ellipsis, BookOpen, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex text-white p-8 gap-8 bg-[#0f172a] min-h-screen">
      
      {/* LEFT PANEL */}
      <div className="w-[320px] bg-[#111827] rounded-3xl p-6 flex flex-col gap-6 shadow-lg">

        <img
          src="https://plus.unsplash.com/premium_vector-1765485232220-aaef147d4829?w=600"
          alt="Deck"
          className="rounded-2xl"
        />

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          <button className="bg-purple-600 px-4 py-2 rounded-xl text-sm hover:bg-purple-700 transition">
            Browse
          </button>

          <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-600">
            <Share2 size={18} />
          </button>

          <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-600">
            <Heart size={16} />
          </button>

          <button className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-600">
            <Ellipsis size={18} />
          </button>
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-semibold">
          Vocabulary for Beginners
        </h2>

        <p className="text-gray-400 text-sm">
          Start your journey into English with beginner-friendly vocabulary
          decks designed to improve your speaking and writing skills.
        </p>

        {/* WORD OF THE DAY */}
        <div className="bg-[#1f2937] p-4 rounded-xl">
          <h3 className="text-sm font-semibold mb-2">Word of the Day</h3>
          <p className="text-lg font-bold text-purple-400">Curious</p>
          <p className="text-xs text-gray-400 mt-1">
            eager to know or learn something.
          </p>
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col gap-6">

        {/* SMALL STATS SECTION */}
        <div className="flex gap-6">

          <div className="bg-[#1f2937] p-4 rounded-xl flex items-center gap-3">
            <BookOpen className="text-purple-400" />
            <div>
              <p className="text-xs text-gray-400">Decks</p>
              <h3 className="font-bold">12</h3>
            </div>
          </div>

          <div className="bg-[#1f2937] p-4 rounded-xl flex items-center gap-3">
            <TrendingUp className="text-purple-400" />
            <div>
              <p className="text-xs text-gray-400">Words Learned</p>
              <h3 className="font-bold">240</h3>
            </div>
          </div>

        </div>

        {/* KEEP RIGHT SECTION SAME */}
        <Rightsection />

      </div>

    </div>
  );
};

export default Dashboard;