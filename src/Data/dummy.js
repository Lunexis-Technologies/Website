import { AiOutlineClockCircle, AiFillCloud } from "react-icons/ai";
import { SiGooglepodcasts } from "react-icons/si";
import { Company } from "../Components";

export const routes = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Company",
    path: "#company",
  },
  
  {
    name: "Products",
    path: "#products",
  },
  {
    name: "Careers",
    path: "#careers",
  },

  {
    name: "Support",
    path: "#support",
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

export const features = ["Share", "Communicate", "Build", "Grow"];

export const controls = [
  {
    name: "Innovation",
    icon: SiGooglepodcasts,
  },
  {
    name: "Acceleration",
    icon: AiFillCloud,
  },
  {
    name: "Passion",
    icon: AiOutlineClockCircle,
  },
];
