import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";

interface RightProps {
  spotifyApi: any;
  chooseTrack: any;
}

const Right: React.FC<RightProps> = ({}) => {
  return (
    <section className="p-4 space-y-8 pr-8">
      <div className="flex space-x-2 items-center justify-between">
        {/* Icons */}
        <div className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4"></div>
      </div>
    </section>
  );
};

export default Right;
