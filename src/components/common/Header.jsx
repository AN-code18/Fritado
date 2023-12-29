import React from "react";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-link";
import Logo from "../../data/Logo.jpeg.jpg";
import Button from "./Button";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup') ;
  };
  return (
    <div className="h-[75px] flex ">
      <nav className="flex items-center justify-between w-full">
        {/**logo */}
        <div className="flex ml-4 mt-4 mb-4">
          <Link to="/">
            <img src={Logo} alt="Logo" width={150} height={32} loading="lazy" />
          </Link>
        </div>
        {/*menu */}
        <div className="flex">
          <ul className="flex items-center gap-x-8 ml-auto">
            {NavbarLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-red-500 text-base font-medium font-sans px-0 py-8"
              >
                <Link to={link?.path}>
                  <p>{link.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          {/* call-section */}
          <div className="flex items-center ml-12">
            <div className="mr-8 relative">
              <div className="relative pl-12">
                <FiPhoneCall
                  size={30}
                  color="#2f5c83"
                  style={{ position: "absolute", top: "12px", left: "0" }}
                />
                <span className="font-normal">Call Now</span>
                <p className="font-medium font-sans mb-0 text-lg leading-7">
                  <Link to="#">+91 (625) 897-8995</Link>
                </p>
              </div>
            </div>

            <div className="relative mr-4">
              <Button linkto={"/login"} onClick={handleClick} active={true}>Log in</Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
