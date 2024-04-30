import { AiOutlineClockCircle, AiFillCloud } from "react-icons/ai";
import { SiGooglepodcasts } from "react-icons/si";
import { Company } from "../Components";
import { Link } from "react-router-dom";

export const routes = [
  {
    name: <Link>Home</Link>,
    path: "#",
  },
  {
    name: <Link to="/Company">Company</Link>,
    //path: ".src/Components/Company.jsx"
  },
  
  {
    name: "Products",
    path: "#products",
  },
  {
    name: <Link to="/Careers">Careers</Link>,
  },

  {
    name: "Support",
    path: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPGFkkjZrRzzWtjtCVdDfQSHNTNknjpnrtlrMLJppDvFMMRWWdzRLCDqslMFBTJDsvFBBzh",
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
