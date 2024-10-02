import React from "react";
import Aboutimage1 from "../assets/about images/aboout9.png";
import Aboutimage2 from "../assets/about images/aboout90.png";
import Aboutimage3 from "../assets/about images/aboout92.png";
import Aboutimage4 from "../assets/about images/aboout95.png";
import Aboutimage5 from "../assets/about images/aboout98.png";
import Aboutimage6 from "../assets/about images/aboout98a.png";
import Aboutimage7 from "../assets/about images/aboout98b.png";
import Aboutimage8 from "../assets/about images/aboout99.png";
import Aboutimage9 from "../assets/about images/aboout982.png";
import Aboutimage10 from "../assets/about images/about5.png";
import Aboutimage11 from "../assets/about images/aboout98928.png";
import Aboutimage12 from "../assets/about images/Rectangle 95.png";

import Team1 from "../assets/about images/team1.png";
import Team2 from "../assets/about images/team2.png";
import Team3 from "../assets/about images/team3.png";
import Team4 from "../assets/about images/team4.png";
import Team5 from "../assets/about images/team6.png";
import Team6 from "../assets/about images/team7.png";
import Team7 from "../assets/about images/team8.png";
import Team8 from "../assets/about images/team9.png";
import Team9 from "../assets/about images/team10.png";
import Team10 from "../assets/about images/team11.png";
import Team11 from "../assets/about images/team12.png";
import Team12 from "../assets/about images/team13.png";
import Team13 from "../assets/about images/team16.png";
import Team14 from "../assets/about images/team17.png";
import Team15 from "../assets/about images/team18.png";
import Team16 from "../assets/about images/team19.png";
import Team17 from "../assets/about images/team115.png";
import Team18 from "../assets/about images/team120.png";
import Team19 from "../assets/about images/team121.png";
import Team20 from "../assets/about images/team123.png";
import Team21 from "../assets/about images/team125.png";
import Team22 from "../assets/about images/team126.png";
import Team23 from "../assets/about images/team20.png";

import Board1 from "../assets/about images/board1.png";
import Board2 from "../assets/about images/board2.png";
import Board3 from "../assets/about images/board3.png";
import Board4 from "../assets/about images/board4.png";
import Board5 from "../assets/about images/board5.png";
import Board6 from "../assets/about images/board6.png";

const About = () => {
  return (
    <div className="">
      <div className="flex flex-col px-[80px] mt-20 md:px-3 sm:px-4  lg:px-[87px]">
        <h2 className="font-[700] text-6xl sm:text-5xl leading-[64px] lg:text-6xl ">
          Empower, uplift and <br />
          educate 1 million slum <br />
          children in 5 years using chess.
        </h2>
        <p className="pr-[12rem] sm:pr-0 mt-5 text-[18px] leading-[1.7] lg:pr-[20rem]">
          {" "}
          Chess in Slums was established in 2018 by Tunde Onakoya. Coming from
          an economically disadvantaged background, Tunde saw no way out until
          the game of chess came to his rescue. Since then, he envisioned a
          world where like him, the game of chess will be the ultimate messiah
          that impoverished children need to believe in a world beyond their
          grim reality.
        </p>
      </div>
      <div className="grid grid-cols-4 px-[83px] lg:mx-[86px] md:px-0 sm:px-0 sm:grid-cols-2 gap-2  mt-10 flex-1 mb-10">
        <img src={Aboutimage12} alt="" />
        <img src={Aboutimage4} alt="" />
        <img src={Aboutimage3} alt="" />
        <img src={Aboutimage6} alt="" />

        <img src={Aboutimage5} alt="" />
        <img src={Aboutimage2} alt="" />
        <img src={Aboutimage10} alt="" />
        <img src={Aboutimage9} alt="" />

        <img loading="lazy" src={Aboutimage8} alt="" />
        <img loading="lazy" src={Aboutimage1} alt="" />
        <img loading="lazy" src={Aboutimage11} alt="" />
        <img loading="lazy" src={Aboutimage7} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-5xl sm:text-4xl font-[700] mt-24">
          The dream team
        </h2>
        <div className="grid grid-cols-4 gap-[95px] lg:gap-[100px] md:gap-4 sm:grid-cols-2 sm:gap-2 sm:mx-1 mx-[6rem] mt-14">
          <div>
            <img loading="lazy" src={Team1} alt="" className="" />
            <p className="text-center mt-5">Tunde Onakoya</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Founder & Convener
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team2} alt="" />
            <p className="text-center mt-5">Veronica Akaolisa Egere</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Partnership Manager
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team3} alt="" />
            <p className="text-center mt-5">Emmanuel Abiodun Oke</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Chief Operations Officer
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team4} alt="" />
            <p className="text-center mt-5">Esther Hunkuten</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Scholarship Manager
            </p>
          </div>

          <div>
            <img loading="lazy" src={Team23} alt="" />
            <p className="text-center mt-5">Samuel Awobajo</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Project Coordinator Officer
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team5} alt="" />
            <p className="text-center mt-5">Aaron Thompson</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              International Outreach
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team3} alt="" />
            <p className="text-center mt-5">David Sterling</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Corporate Outreach
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team6} alt="" />
            <p className="text-center mt-5">Shedrack Osuala</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Community Outreach
            </p>
          </div>

          <div>
            <img loading="lazy" src={Team7} alt="" />
            <p className="text-center mt-5">Adebowale Ogunfadebo</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Photography & Videography
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team8} alt="" />
            <p className="text-center mt-5">Oluwafunmilayo Oyeniran</p>
            <p className="text-center mt-2 text-[#5B5B5B]">Editorial</p>
          </div>
          <div>
            <img loading="lazy" src={Team9} alt="" />
            <p className="text-center mt-5">Adebiyi Olaniyan</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Graphics & Illustrations
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team10} alt="" />
            <p className="text-center mt-5">Olashile Ayobami</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Web Design & Management
            </p>
          </div>

          <div>
            <img loading="lazy" src={Team11} alt="" />
            <p className="text-center mt-5">Ayodele Noutouglo</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Website Management
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team12} alt="" />
            <p className="text-center mt-5">Amarachi Asinobi</p>
            <p className="text-center mt-2 text-[#5B5B5B]">Global Comms</p>
          </div>
          <div>
            <img loading="lazy" src={Team17} alt="" />
            <p className="text-center mt-5">Freedom Kolushade</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Administrative Officer
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team13} alt="" />
            <p className="text-center mt-5">Peter Abidogun</p>
            <p className="text-center mt-2 text-[#5B5B5B]">Chess Education</p>
          </div>

          <div>
            <img loading="lazy" src={Team14} alt="" />
            <p className="text-center mt-5">Samson Ofubu</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Website Management
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team15} alt="" />
            <p className="text-center mt-5">Gideon Sam Itepu</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Mental Maths Cordinator
            </p>
          </div>
          <div>
            <img loading="lazy" src={Team16} alt="" />
            <p className="text-center mt-5">Dr. Fafiola</p>
            <p className="text-center mt-2 text-[#5B5B5B]">Medicals</p>
          </div>
          <div>
            <img loading="lazy" src={Team18} alt="" />
            <p className="text-center mt-5">Ademola Adeleye</p>
            <p className="text-center mt-2 text-[#5B5B5B]">Child Support</p>
          </div>

          <div className="">
            <img loading="lazy" src={Team19} alt="" />
            <p className="text-center mt-5">Oladotun Giwa</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Inventory & Asset Management
            </p>
          </div>
          <div className="">
            <img loading="lazy" src={Team20} alt="" />
            <p className="text-center mt-5">Dolapo Oyenuga</p>
            <p className="text-center mt-2 text-[#5B5B5B]">Event Management</p>
          </div>
          <div className="">
            <img loading="lazy" src={Team21} alt="" />
            <p className="text-center mt-5">Mary Udoh</p>
            <p className="text-center mt-2 text-[#5B5B5B]">Welfare</p>
          </div>
          <div className="">
            <img loading="lazy" src={Team22} alt="" />
            <p className="text-center mt-5">Hazel Iwendi</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Volunteer Management
            </p>
          </div>
        </div>

        <h2 className="font-[700] text-5xl sm:text-4xl text-center mt-28">
          Board of trustees
        </h2>
        <div className="grid grid-cols-4 mx-[5rem] lg:grid-cols-4 lg:mx-[3rem] md:mx-0 md:grid-cols-3 sm:gap-2 sm:mx-1 sm:grid-cols-2 mt-14 place-items-center mb-28">
          <div>
            <img loading="lazy" src={Board1} alt="" className="ml-8 sm:ml-0" />
            <p className="text-center mt-5">Obinna Ogbonnaya</p>
            <p className="text-center mt-2 text-[#5B5B5B] lg:px-10">
              International Chess Arbiter, FIDE Technical Adviser
            </p>
          </div>
          <div>
            <img loading="lazy" src={Board2} alt="" className="ml-8 sm:ml-0" />
            <p className="text-center mt-5">Daniel Anwuli</p>
            <p className="text-center mt-2 text-[#5B5B5B] lg:px-10">
              International Chess Master and West African Chess Champion
            </p>
          </div>
          <div>
            <img loading="lazy" src={Board3} alt="" />
            <p className="text-center mt-5">Kabir Ahmed</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              CEO, Hydeashub Limited
            </p>
          </div>
          <div>
            <img loading="lazy" src={Board4} alt="" />
            <p className="text-center mt-5">Carey Fan</p>
            <p className="text-center mt-2 text-[#5B5B5B]">CEO, Chesskid</p>
          </div>
          <div className="mt-10">
            <img loading="lazy" src={Board5} alt="" />
            <p className="text-center mt-5">Bunmi Akinyemiju</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Venture Garden Foundation
            </p>
          </div>
          <div className="mt-10">
            <img loading="lazy" src={Board6} alt="" />
            <p className="text-center mt-5">Kunmi Demuren</p>
            <p className="text-center mt-2 text-[#5B5B5B]">
              Venture Garden Foundation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
