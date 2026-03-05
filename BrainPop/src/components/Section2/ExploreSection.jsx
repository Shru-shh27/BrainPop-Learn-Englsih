import React from "react";
import { Search, Filter, Share2, Heart, Ellipsis } from "lucide-react";

const ExploreSection = () => {
  return (
    <div className="bg-[#0f172a] text-white p-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Explore, Learn, and Have Fun
      </h1>

      {/* SEARCH BAR */}
      <div className="flex justify-center gap-3 mb-10">

        <div className="flex items-center bg-[#1f2937] px-4 py-2 rounded-full w-[600px]">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search for collections, decks, categories..."
            className="bg-transparent outline-none text-sm ml-2 w-full"
          />
        </div>

        <button className="bg-[#1f2937] p-3 rounded-full">
          <Filter size={18} />
        </button>

        <button className="bg-purple-600 px-6 py-2 rounded-full">
          Search
        </button>

      </div>

      {/* FEATURED CARD */}
      <div className="flex justify-center">

        <div className="bg-[#1f2937] rounded-2xl p-6 flex gap-6 w-[850px]">

          {/* IMAGE */}
          <img
            // src="https://plus.unsplash.com/premium_vector-1765485232220-aaef147d4829?w=600"
            alt="spanish"
            className="w-[220px] rounded-xl"
          />

          {/* TEXT CONTENT */}
          <div className="flex flex-col justify-between">

            <div>
              <h2 className="text-xl font-semibold">
                Spanish Vocabulary for Beginners
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                Start your journey into the Spanish language with this
                beginner-friendly collection of vocabulary decks.
              </p>

              {/* AUTHOR */}
              <div className="flex items-center gap-2 mt-4">
                <img
                  src=""
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">Created by Davis Curtis</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3 mt-4">

              <button className="bg-purple-600 px-5 py-2 rounded-full text-sm">
                View Collection →
              </button>

              <button className="bg-[#111827] p-2 rounded-full">
                <Share2 size={16} />
              </button>

              <button className="bg-[#111827] p-2 rounded-full">
                <Heart size={16} />
              </button>

              <button className="bg-[#111827] p-2 rounded-full">
                <Ellipsis size={16} />
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* FEATURED CATEGORIES */}
      <h2 className="text-center text-lg font-semibold mt-12 mb-6">
        Featured Categories
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">

        {[
          "Math",
          "Sports",
          "Music",
          "Science",
          "Art",
          "Languages",
          "History",
          "Tech",
        ].map((cat, index) => (
          <div
            key={index}
            className="bg-[#1f2937] w-[120px] h-[90px] rounded-xl flex flex-col items-center justify-center hover:bg-[#374151] cursor-pointer"
          >
            <p className="text-sm">{cat}</p>
            <span className="text-xs text-gray-400">
              {Math.floor(Math.random() * 900 + 100)} Collections
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ExploreSection;