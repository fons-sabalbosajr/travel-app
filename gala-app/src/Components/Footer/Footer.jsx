import React, { useEffect } from "react";
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

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter email address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
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

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
              commodi tenetur sint provident facere et dolore facilis, quis
              dolores, nemo ducimus! Blanditiis provident at odit laudantium
              distinctio. Soluta, fuga.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiFillFacebook className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillYoutube className="icon" />
              <AiOutlineTwitter className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/*GROUP 1*/}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
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

            {/*GROUP 2*/}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">OUR PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Car Rentals
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> HosterWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Trip Advisor
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Payment
              </li>
            </div>

            {/*GROUP 3*/}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTES</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Cagayan
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Bicol
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Davao
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Zambales
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Cebu
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL BOOKING WEBSITE</small>
            <small>Copyrights Reserved - Alfonso Sabalbosa Jr | 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
