import NewReleases from "./components/watchNow/NewReleases";
import Movies from "./components/watchNow/Movies";
import Series from "./components/watchNow/Series";
import Animation from "./components/watchNow/Animation";
import Anime from "./components/watchNow/Anime";

function WatchNow() {
  return (
    <>
      <NewReleases />
      <Movies />
      <Series />
      <Animation />
      <Anime />
    </>
  );
}

export default WatchNow;
