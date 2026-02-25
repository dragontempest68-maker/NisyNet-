import React from 'react';

function SearchBar({ aramaMetin, setAramaMetin }) {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        value={aramaMetin}
        placeholder="İsim veya açıklama ile ara..."
        onChange={(e) => setAramaMetin(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-slate-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-slate-400"
      />
    </div>
  );
}

export default SearchBar;