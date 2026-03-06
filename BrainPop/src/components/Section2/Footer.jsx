import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            BrainPop
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Improve your vocabulary with interactive decks and quizzes.
            Learn new words daily and boost your English language skills
            in a fun and engaging way.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-400 cursor-pointer transition">Home</li>
            <li className="hover:text-purple-400 cursor-pointer transition">Vocabulary</li>
            <li className="hover:text-purple-400 cursor-pointer transition">Quiz</li>
            <li className="hover:text-purple-400 cursor-pointer transition">About</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">Email: BrainPop@gmail.com</p>
          <p className="text-sm text-gray-400 mt-1">Support: support@brainpop.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 BrainPop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;