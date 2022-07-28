import React from "react";

interface TrackProps {
  track: any;
  chooseTrack: (track: any) => void;
}

export const Track: React.FC<TrackProps> = ({ track, chooseTrack }) => {
  return (
    <div className="flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out">
      <div className="flex items-center">
        <img
          src={track.albumUrl}
          alt=""
          className="rounded-xl h-12 w-12 object-cover mr-3"
        />
        <div>
          <h4 className="text-white text-sm font-semibold truncate w-[450px]">
            {track.title}
          </h4>
          <p className="text-[rgb(179,179,179)] text-[13px] font-semibold group-hover:text-white">
            {track.artist}
          </p>
        </div>
      </div>
    </div>
  );
};
