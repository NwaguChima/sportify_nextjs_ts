import React, { useEffect, useState } from "react";
import RecentlyPlayed from "./RecentlyPlayed";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import { useSession } from "next-auth/react";
import { MusicItem } from "../utils/types";

interface RightProps {
  spotifyApi: any;
  chooseTrack: any;
}

const Right: React.FC<RightProps> = ({ spotifyApi, chooseTrack }) => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [recentlyPlayed, setRecentlyPlayed] = useState<MusicItem[] | []>([]);

  // Recently Played Tracks...
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res: any) => {
      setRecentlyPlayed(
        res.body.items.map(({ track }: any) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <section className="p-4 space-y-8 pr-8">
      <div className="flex space-x-2 items-center justify-between">
        {/* Icons */}
        <div className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4">
          <HiOutlineShieldCheck className="text-[#ccc] text-xl" />
          <MdOutlineSettings className="text-[#ccc] text-xl" />
          <BiBell className="text-[#ccc] text-xl" />
        </div>
        {/* Profile */}
        <Dropdown />
      </div>

      {/* Recently played tracks */}
      <div className="bg-[#0d0d0d] border-2 border-[#262626] rounded-xl space-y-4 p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-semibold text-sm">Recently Played</h4>
          <ViewGridIcon className="text-[#686868] h-6" />
        </div>

        <div className="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide">
          {recentlyPlayed.map((track: any, index) => (
            <RecentlyPlayed
              key={index}
              track={track}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
        <button className="btn">View All</button>
      </div>
    </section>
  );
};

export default Right;
