import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Poster from "./Poster";
import { Search } from "./Search";

interface BodyProps {
  spotifyApi: SpotifyWebApi;
  chooseTrack: (track: any) => void;
}

const Body: React.FC<BodyProps> = ({ spotifyApi, chooseTrack }) => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [newReleases, setNewReleases] = useState<any>([]);

  useEffect(() => {
    if (!accessToken) return;

    // @ts-ignore
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // searching for tracks
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setSearchResults(
        res.body.tracks?.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });
  }, [search, accessToken]);

  // for new releases
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getNewReleases().then((res) => {
      setNewReleases(
        res.body.albums?.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [search, accessToken]);

  return (
    <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl  flex-grow md:mr-2.5">
      <Search search={search} setSearch={setSearch} />
      <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
        {searchResults.length === 0
          ? newReleases
              .slice(0, 4)
              .map((track: any) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))
          : searchResults
              .slice(0, 4)
              .map((track: any) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))}
      </div>

      <div className="flex gap-x-8 absolute min-w-full md:relative ml-6">
        <div className="hidden xl:inline max-w-[270px]">
          <h2 className="text-white font-bold mb-3">Genres</h2>
          <div className="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
            <div className="genre">Classic</div>
            <div className="genre">Rock</div>
            <div className="genre">Pop</div>
            <div className="genre">Hip Hop</div>
            <div className="genre">R&B</div>
            <div className="genre">Jazz</div>
            <div className="genre">Country</div>
            <div className="genre">Electronic</div>
            <div className="genre">Folk</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
