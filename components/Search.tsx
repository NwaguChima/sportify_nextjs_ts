import React from "react";

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <div className="max-w-[1150px] bg-[#1a1a1a1] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-white border-none bg-[#1a1a1a] lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs"
        placeholder="Search..."
      />
    </div>
  );
};
