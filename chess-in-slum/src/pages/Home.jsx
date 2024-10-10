import {React, Suspense, lazy} from "react";
import Image1 from "../assets/home image/img1.jpg";
import Image2 from "../assets/home image/img2.jpg";
import Image3 from "../assets/home image/img5.png";
import Image4 from "../assets/home image/Rectangle 98.png";
import Piggyvest from "../assets/home image/Piggyvest Logo.png";
import Chessable from "../assets/home image/Chessable Logo.png";
import Chesskid from "../assets/home image/Chesskid Logo.png";
import Chesscom from "../assets/home image/Chess.com Logo.png";
import "../pages/Home.css";



const Unveil = lazy(() => import("../components/Unveil"));
const Approach = lazy(() => import("../components/Approach"));
const Program = lazy(() => import("../components/Program"));
const Display = lazy(() => import("../components/Display"));
const News = lazy(() => import("../components/News"));
const Walloffame = lazy(() => import("../components/Walloffame"));
const Feature = lazy(() => import("../components/Feature"));


const Home = () => {
  return (
    <>
      <section className="flex items-center justify-around gap-10 mt-20 xl:px-10  font-josefin sm:flex-col">
        <div className="mx-20 md:mx-10 sm:mx-10  mb-10 lg:mx-14">
          <h2 className="pb-5 text-left font-bold text-6xl  font-['Josefin_Sans']">
            Raising <br />
            champions <br /> in the slums
          </h2>
          <p className="mr-48 sm:mr-5 md:mr-10 pb-8 leading-6 text-black text-xl  font-normal font-['Josefin_Sans']">
            Empowering children from impoverished backgrounds with life skills
            through the game of chess.
          </p>
          <div className="flex gap-5">
            <button className="bg-[#C18E00] w-28 py-2 rounded-full text-white font-normal text-lg">
              Donate
            </button>
            <button className="relative bg-transparent  rounded-full w-56 font-normal text-lg border-2 border-black   hover:after:content-['Partner_with_us'] after:content-['Become_a_chaperone']"></button>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-3 mx-20 px-2 md:mx-0 xl:pr-[3.5rem] md:px-0 sm:mx-3">
          <img className="w-96 h-48  " src={Image1} alt="" loading="lazy" />
          <img className="w-96 h-48  " src={Image2} alt="" loading="lazy"/>
          <img className="w-96" src={Image3} alt="" loading="lazy"/>
          <img className="w-96" src={Image4} alt="" loading="lazy"/>
        </div>
      </section>
      <div className="overflow-hidden mt-36 flex items-center justify-center xl:mx-[7rem] sm:mx-10 md:mx-10 mx-32 sm:flex-col">
        <p className="text-xl sm:text-lg">Supported by</p>
        <div className="wrapper sm:max-w-full sm:mr-10 md:max-w-[35rem] xl:max-w-[40rem]">
          <img className="h-10  item item1" src={Chesskid} alt="Chesskid" loading="lazy"/>
          <img className="h-10  item item2" src={Chesscom} alt="Chess.com" loading="lazy"/>
          <img className="h-10  item item3" src={Piggyvest} alt="Piggyvest" loading="lazy"/>
          <img className="h-10  item item4" src={Chessable} alt="Chessable" loading="lazy"/>
          <img className="h-10  item item5" src={Chesskid} alt="Chesskid" loading="lazy"/>
          <img className="h-10   item item6" src={Chesscom} alt="Chess.com" loading="lazy"/>
          <img className="h-10  item item7" src={Piggyvest} alt="Piggyvest" loading="lazy"/>
          <img className="h-10  item item8" src={Chessable} alt="Chessable" loading="lazy"/>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Unveil />
        <Approach />
        <Program />
        <Display />
        <News />
        <Walloffame />
        <Feature />
      </Suspense>

    </>
  );
};

export default Home;
