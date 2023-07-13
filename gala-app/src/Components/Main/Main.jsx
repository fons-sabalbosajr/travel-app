import React, {useEffect} from "react";
import "./main.css";

import img from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Boracay",
    location: "Philippines",
    grade: "BEACH RELAX ",
    fees: "₱8000",
    description:
      "Welcome to Boracay, a tropical paradise nestled in the heart of the Philippines. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant nightlife, Boracay has become a world-renowned destination for travelers seeking sun, relaxation, and adventure.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bohol",
    location: "Philippines",
    grade: "HILLS OF HAPPINESS ",
    fees: "₱3000",
    description:
      "One of the main attractions in Bohol is the world-renowned Chocolate Hills, a geological formation consisting of over a thousand cone-shaped hills that turn brown during the dry season, resembling chocolate mounds. These iconic hills provide an awe-inspiring backdrop for photos and offer a magnificent panoramic view from the viewing decks.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "North Windmills",
    location: "Philippines",
    grade: "FRESH TROPICAL AIR ",
    fees: "₱3000",
    description:
      "Located in the northern region of the Philippines, Ilocos is known for its stunning landscapes and rich cultural heritage. One of the captivating features of this region is the iconic windmills that dot its picturesque countryside. These majestic structures, standing tall against the sky, harness the power of the wind and have become a symbol of Ilocos commitment to renewable energy.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Puerto Prinsesa",
    location: "Philippines",
    grade: "TROPICAL CAVES ",
    fees: "₱4000",
    description:
      "Famous for its crystal-clear turquoise waters, white sandy beaches, and vibrant coral reefs, Palawan is a haven for beach lovers, snorkelers, and divers alike. The province boasts stunning destinations like El Nido, Coron, and Puerto Princesa, each offering unique experiences and awe-inspiring landscapes.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Luneta",
    location: "Philippines",
    grade: "HISTORICAL CAPTURE ",
    fees: "₱2000",
    description:
      "Named after Dr. Jose Rizal, the Philippine national hero, Luneta serves as a tribute to his life and the sacrifices he made for the country s independence. The park spans over 140 acres and offers a peaceful and scenic environment amidst the bustling city. It is a place where locals and tourists alike come to relax, enjoy nature, and immerse themselves in the country vibrant history.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Pampanga",
    location: "Philippines",
    grade: "GIANT LANTERN ",
    fees: "₱1500",
    description:
      "Aside from its gastronomic delights, Pampanga offers several attractions for visitors. The annual Hot Air Balloon Festival in Clark Freeport Zone attracts both locals and tourists, showcasing colorful hot air balloons against the backdrop of the Clark Airfield. The province is also home to numerous cultural festivals, such as the renowned Giant Lantern Festival in the city of San Fernando, where massive and intricately designed lanterns illuminate the night sky.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Batanes",
    location: "Philippines",
    grade: "OPEN FIELDS DREAM ",
    fees: "₱5500",
    description:
      'Batanes is often referred to as the "Home of the Winds" due to its gusty weather, but don t let that deter you. This rugged charm adds to the allure of the destination, providing a unique experience for travelers seeking tranquility and natural wonders.',
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Aurora",
    location: "Philippines",
    grade: "SURFING PLEASURES ",
    fees: "₱6000",
    description:
      'Aurora, Philippines is a captivating province located on the eastern coast of Luzon, the largest island in the Philippines. Known for its breathtaking natural beauty and untouched landscapes, Aurora offers a unique blend of lush rainforests, majestic waterfalls, pristine beaches, and towering mountains. Named after the wife of former President Manuel L. Quezon, Aurora is often referred to as the "Surfing Capital of the Philippines" due to its world-class waves and renowned surfing spots.',
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Tagaytay",
    location: "Philippines",
    grade: "TAAL VIEWDECK ",
    fees: "₱9000",
    description:
      "Tagaytay is a charming city nestled in the province of Cavite, Philippines. Located just a short distance from the bustling capital of Manila, Tagaytay is renowned for its cool climate, scenic landscapes, and breathtaking views. Perched on the ridge of the majestic Taal Volcano, it offers visitors a mesmerizing panorama of Taal Lake and its picturesque surroundings.",
  },
];

const Main = () => {

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <section className="main container">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
