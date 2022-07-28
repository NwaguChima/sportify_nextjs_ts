import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atom/playerAtom";
import SpotifyPlayer from "react-spotify-web-playback";

interface PlayerProps {
  accessToken: any;
  trackUri: any;
}

export const Player: React.FC<PlayerProps> = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] =
    useRecoilState<any>(playingTrackState);

  useEffect(() => {
    if (trackUri) {
      setPlay(true);
    }
  }, [trackUri]);

  if (!accessToken) return null;

  {
    /* Premium Users */
  }
  return (
    <SpotifyPlayer
      styles={{
        activeColor: "#fff",
        bgColor: "#181818",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: "70px",
        sliderTrackColor: "#535353",
        sliderTrackBorderRadius: "4px",
        sliderHandleColor: "#fff",
        errorColor: "#fff",
      }}
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        setPlay(state.isPlaying);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      magnifySliderOnHover={true}
      autoPlay={true}
    />
  );
};
