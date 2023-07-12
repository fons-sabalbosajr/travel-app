import React from "react";
import "./footer.css";
import video2 from "../../Assets/bgvideo2.mp4";
import { FiSend } from "react-icons/fi";
import { SiYourtraveldottv } from "react-icons/si";
import { FiChevronRight } from "react-icons/fi";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter email address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <SiYourtraveldottv className="icon" /> Gala.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
              commodi tenetur sint provident facere et dolore facilis, quis
              dolores, nemo ducimus! Blanditiis provident at odit laudantium
              distinctio. Soluta, fuga.
            </div>

            <div className="footerSocials flex">
              <AiFillFacebook className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillYoutube className="icon" />
              <AiOutlineTwitter className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/*GROUP ONE*/}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Payment
              </li>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Footer;
