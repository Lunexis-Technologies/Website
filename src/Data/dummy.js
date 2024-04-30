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
    name: "Beta Testers",
    desc: "27",
  },
  {
    name: "Daily Active User",
    desc: "12",
  },
  {
    name: "Crashes",
    desc: "0",
  },
  {
    name: "Average Engagement Time Per Session",
    desc: "27m 42s",
  },
];

export const features = ["Share", "Communicate", "Build", "Grow"];

export const controls = [
  {
    name: "Innovation",
    //icon: SiGooglepodcasts,
    Text: "hey"
  },
  {
    name: "Acceleration",
    //icon: AiFillCloud,
    Text: "No"
  },
  {
    name: "Passion",
   // icon: AiOutlineClockCircle,
    Text: "workin"
  },
];
