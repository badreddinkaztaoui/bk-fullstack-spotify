import { FiHome } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

type NavMenuType = Array<{
  name: string;
  icon: JSX.Element;
  route: string;
}>;

export const navMenu: NavMenuType = [
  {
    name: "Home",
    icon: <FiHome />,
    route: "/",
  },
  {
    name: "Search",
    icon: <MdSearch />,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: <BiLibrary />,
    route: "/library",
  },
];

export const musicMenu: NavMenuType = [
  {
    name: "Create Playlist",
    icon: <AiOutlinePlus />,
    route: "/playlist",
  },
  {
    name: "Liked Songs",
    icon: <BsHeartFill />,
    route: "/favorites",
  },
];
