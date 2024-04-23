import React from "react";
import "../Styles/Footer.scss";
import { routes } from "../Data/dummy";
//import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="logo">
            <p>LUNEXIS</p>
          </div>
          <div className="footer__cta">
            <p>Follow our journey</p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="footer__middle">
          <div className="left__middle">
            <p>Subscribe to our news letter</p>
            <div className="input__container">
              <input type="text" placeholder="Email address" />
              <button>Go</button>
            </div>
          </div>
          <div className="right__middle">
            <ul className="middle__routes">
              {routes.map((route, index) => (
                <li className="route" key={index}>
                  {route.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="left__bottom">
            <ul>
              <li>Terms & conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="right__bottom">
            <ul>
              <li>
                <BsTwitter
                  onClick={() => {
                    window.location.href = "https://twitter.com/lunexistech ";
                  }}
                />
              </li>
              <li>
                <BsInstagram
                  onClick={() => {
                    window.location.href =
                      "https://www.instagram.com/lunexistechnologies/";
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
