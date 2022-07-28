import React from "react";

interface TrackProps {
  track: any;
  chooseTrack: (track: any) => void;
}

export const Track: React.FC<TrackProps> = ({}) => {
  return <div>Helo</div>;
};
