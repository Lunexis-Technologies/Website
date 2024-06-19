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
    path: ".src/Components/Company.jsx"
    // compoenent: <Company />
  },
  
  
  {
    name: <Link to="/Careers">Careers</Link>,
  },
  {
    // name: <Link to="/Products">Products</Link>,
  },
 

];

export const analytics = [
  {
    name: "Beta Testers",
    desc: "41",
  },

  {
    name: "Average Engagement Time Per Session",
    desc: "17m",
  },

 
];

export const features = ["Posts: Gameplay, Snapshots, Updates, Announcements", "Discover, Chat, Join Communities, Game Together", "Developers keep 100% of revenue.", "Get Realtime Analytics"];
export const featuresList = [ {
  Text: "hey"
},
{
 
  
  Text: "No"
},
{

 // icon: AiOutlineClockCircle,
  Text: "workin"
},];
export const controls = [
  {
   
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
