import { RiMovie2Line, RiMovieLine, RiAwardLine } from "react-icons/ri";
import { MdAnimation } from "react-icons/md";
import { BiMovie } from "react-icons/bi";
import { PiFlowerLotus } from "react-icons/pi";
import { FiAirplay } from "react-icons/fi";

const categoriesList = [
  { id: 1, icon: RiMovie2Line, title: "Movies" },
  { id: 2, icon: BiMovie, title: "Series" },
  { id: 3, icon: MdAnimation, title: "Animations" },
  { id: 4, icon: PiFlowerLotus, title: "Anime" },
  { id: 5, icon: RiMovieLine, title: "Mini Series" },
  { id: 6, icon: RiAwardLine, title: "Suggested" },
];

export default categoriesList;
