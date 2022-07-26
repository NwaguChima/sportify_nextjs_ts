import React from "react";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <div className="max-w-[1150px] bg-[#1a1a1a1] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
    </div>
  );
};
