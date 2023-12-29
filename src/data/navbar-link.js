import { FaLinkedin , FaInstagram ,FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
//import { IoRemoveOutline } from "react-icons/io5";

export const NavbarLinks = [
  {
    id:1,
    title: "Home",
    path: "/",
  },
  {
    id:2,
    title: "Features",
    path: "/features",
  },
  {
    id:3,
    title: "Benefits",
    path: "/benefits",
  },
  
  {
    id:4,
    title: "About",
    path: "/about",
  },
  {
    id:5,
    title: "Blog",
    path: "/blog",
  },
  {
    id:6,
    title: "Demo",
    path: "/demo",
  },
  {
    id:7,
    title: "Support",
    path: "/support",
  },
];

export const SocialLinksArray = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={18} />
      </>
    ),
    href: "",
  },
  {
    id: 2,
    child: (
      <>
        <TiSocialFacebook size={18} />
      </>
    ),
    href: "",
  },
  {
    id: 3,
    child: (
      <>
        <FaInstagram size={18} />
      </>
    ),
    href: "",
  },
  {
    id: 4,
    child: (
      <FaTwitter size={18}/>
    ),
    
  },
  /*{
    id: 5,
    child: (
      <> 
      <IoRemoveOutline size={25}/>
      <span>Follow Us</span>
      </>
    ),
    
  },*/
];
