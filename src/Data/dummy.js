import { AiOutlineClockCircle, AiFillCloud } from "react-icons/ai";
import { SiGooglepodcasts } from "react-icons/si";

export const routes = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Company",
    path: "#how",
  },
  {
    name: "Products",
    path: "#about",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

export const analytics = [
  {
    name: "Beta users",
    desc: "10",
  },
  {
    name: "Feedback",
    desc: "16",
  },
  {
    name: "Support",
    desc: "24/7",
  },
];

export const features = [
  "Choose a view",
  "Meet your new butler",
  "Dive into the details",
  "Power up",
];

export const controls = [
  {
    name: "Structured Reports",
    icon: SiGooglepodcasts,
  },
  {
    name: "Cloud System",
    icon: AiFillCloud,
  },
  {
    name: "24/7 Support",
    icon: AiOutlineClockCircle,
  },
];
