import React from "react";
import { Search, Filter, Share2, Heart, Ellipsis } from "lucide-react";

const ExploreSection = () => {
  return (
    <div className="bg-[#0f172a] text-white p-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-8 tracking-wide">
        Explore, Learn, and Master English
      </h1>

      {/* SEARCH BAR */}
      <div className="flex justify-center gap-3 mb-10">
        <div className="flex items-center bg-[#1f2937] px-4 py-2 rounded-full w-[600px] shadow-md focus-within:ring-2 focus-within:ring-purple-500">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search collections, decks, or categories..."
            className="bg-transparent outline-none text-sm ml-2 w-full placeholder-gray-400"
          />
        </div>

        <button className="bg-[#1f2937] p-3 rounded-full hover:bg-[#374151] transition">
          <Filter size={18} />
        </button>

        <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-500 transition shadow-md">
          Search
        </button>
      </div>

      {/* FEATURED CARD */}
      <div className="flex justify-center">
        <div className="bg-[#1f2937] rounded-2xl p-6 flex gap-6 w-[850px] shadow-lg hover:shadow-purple-900/30 transition duration-300">

         
          <img
            src="https://plus.unsplash.com/premium_vector-1682305931376-e1a896f86a71?w=600&auto=format&fit=crop&q=60"
            alt="English learning"
            className="w-[300px] rounded-xl object-cover"
          />

          {/* TEXT CONTENT */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Vocabulary for Beginners
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                Start your English learning journey with beginner-friendly
                vocabulary decks. Discover new words in a fun and simple way
                while building your language confidence step by step.
                <br />
                Practice daily with interactive decks designed to help you
                learn faster, remember longer, and communicate better.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3 mt-4">
              <button className="bg-purple-600 px-5 py-2 rounded-full text-sm hover:bg-purple-500 transition">
                View Collection →
              </button>

              <button className="bg-[#111827] p-2 rounded-full hover:bg-purple-600 transition">
                <Share2 size={16} />
              </button>

              <button className="bg-[#111827] p-2 rounded-full hover:bg-purple-600 transition">
                <Heart size={16} />
              </button>

              <button className="bg-[#111827] p-2 rounded-full hover:bg-purple-600 transition">
                <Ellipsis size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED CATEGORIES */}
      <h2 className="text-center text-lg text-white font-semibold mt-12 mb-6 tracking-wide">
        Featured English Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

        {[
          { name: "Vocabulary", icon: "📚" },
          { name: "Grammar", icon: "✏️" },
          { name: "Common Phrases", icon: "💬" },
          { name: "Idioms", icon: "🧠" },
          { name: "Phrasal Verbs", icon: "🔤" },
          { name: "Synonyms", icon: "🔁" },
          { name: "Antonyms", icon: "⚖️" },
          { name: "Spelling", icon: "🔠" },
        ].map((cat, index) => (
          <div
            key={index}
            className="bg-[#1f2937] rounded-xl p-5 flex flex-col items-center justify-center text-center
            hover:bg-purple-600 transition duration-300 cursor-pointer shadow-lg hover:scale-105"
          >
            <div className="text-3xl mb-2">{cat.icon}</div>

            <p className="text-sm font-semibold">{cat.name}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ExploreSection;