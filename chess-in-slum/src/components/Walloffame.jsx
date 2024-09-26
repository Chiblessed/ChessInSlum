import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ChessKid from "../assets/Ellipse 311.png";
import Patrice from "../assets/Ellipse 3112.png";
import Chipper from "../assets/Ellipse 3113.png";
import Paris from "../assets/Ellipse 3114.png";
import Netflix from "../assets/Ellipse 3116.png";
import Damilola from "../assets/Ellipse 3117.png";
import Manji from "../assets/Ellipse 3118.png";
import Latefat from "../assets/Ellipse 3119.png";
import Kate from "../assets/Ellipse 31123.png";
import Rinu from "../assets/Ellipse 311234.png";
import Macroni from "../assets/Ellipse 3112345.png";

const heartVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: -20 },
  exit: { opacity: 0, y: -100 },
};

const hearts = ["❤️", "💛", "💙", "💚", "💜"];

const Walloffame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const cycleHearts = async () => {
      while (true) {
        await controls.start({
          opacity: 1,
          y: -20,
          transition: { duration: 5 },
        });
        await controls.start({
          opacity: 0,
          y: -50,
          transition: { duration: 1 },
        });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hearts.length);
      }
    };

    cycleHearts();
  }, [controls]);

  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <div className="flex items-center justify-center gap-14  font-josefin py-6 ">
        <h1 className="text-4xl  font-bold mb-4">Our wall of</h1>
        <div className="relative flex flex-col items-center mb-4">
          {hearts.map((heart, index) => (
            <motion.div
              key={index}
              animate={controls}
              variants={heartVariants}
              initial="hidden"
              exit="exit"
              className={`text-6xl absolute ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              {heart}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 grid-flow-dense mx-24  md:mx-0 gap-5 sm:mx-2 sm:grid-cols-2 xl:px-[6rem]  mb-10  ">
        <div className="border-solid border-[1px]  border-black flex  flex-col h-72 md:h-full sm:h-full py-4 px-1 ">
          <div className="flex text-left gap-3 pl-[1rem] md:pl-0 ">
            <div>
              <img src={ChessKid} alt="" className="w-16 " />
            </div>
            <div className="flex flex-col pt-3 ">
              <h2 className="">ChessKid.com</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@ChessKidcom</p>
            </div>
          </div>

          <p className="pr-5 pl-[89px] md:pl-20 md:pr-0 sm:pl-1 sm:pr-0">
            The Canadian High Commission visited these awesome kids at the
            Oshodi Underbridge! ❤️ We’re around to support @chessinslums and
            their fantastic work to uplift communities through chess
            #ChessInSlumsAfrica #ChessKid
          </p>
        </div>

        <div className="border-solid border-[1px]  border-black flex flex-col md:h-[14rem] lg:h-[12.5rem] sm:h-60 h-44 sm:px-0 py-4 px-2 ">
          <div className="flex gap-3  px-3">
            <div>
              <img src={Netflix} className="" alt="" />
            </div>

            <div className="flex flex-col">
              <h2 className=""> Netflix Nigeria</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@NetflixNaija</p>
            </div>
          </div>

          <p className="pl-[75px] pr-6 sm:pl-2 sm:pr-0 ">
            It is indeed possible to do great things from a small place. Well
            done @chessinslums 👑♟
          </p>
        </div>

        <div className="border-solid border-[1px]  border-black flex flex-col px-5 py-4 md:h-[18rem] sm:h-full sm:px-2 h-64">
          <div className="flex gap-5">
            <div>
              <img src={Patrice} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h2 className="">Patrice Evra</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@Evra</p>
            </div>
          </div>
          <p className="pl-[68px] sm:pl-0 ">
            Checkmate ♟Evra bus 🚃 stop #Nigeria! 🔥🇳🇬 I’m soo impressed by
            those genius kids @Tunde... 🙏@burnaboy #ilovethisgame
            #positive4evra
          </p>
        </div>

        <div className="border-solid border-[1px]  border-black flex flex-col md:h-[30rem] lg:h-[26rem] sm:-mt-[8.5rem] sm:h-[500px] py-2 sm:px-2 px-5 row-span-2  h-[335px]">
          <div className="flex gap-5">
            <div>
              <img src={Chipper} alt="" className="pt-4 " />
            </div>
            <div className="flex flex-col pt-5">
              <h2 className="">Chipper Cash</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@chippercashapp</p>
            </div>
          </div>

          <p className="pl-[66px] sm:pl-0">
            It’s amazing what kids can do when they’re empowered! Thanks to
            @Tunde_OD for letting us in on the amazing work he has been doing
            with @chessinslums Africa. Together, we visited the biggest floating
            slums riding in canoes where we saw the amount of work done by Tunde
            and his team.
          </p>
        </div>

        <div className="border-solid border-[1px] border-black  flex flex-col md:h-[19rem] md:-mt-[9rem] sm:-mt-1 py-4 sm:h-full -mt-28 h-56">
          <div className="flex gap-5 px-4  sm:gap-1 sm:px-1">
            <div>
              <img src={Damilola} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h2 className="">Damilola Oyedele</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@DamiOyedele</p>
            </div>
          </div>
          <p className="pr-[3rem] pl-[5rem]  sm:pr-0 sm:pl-2 text-base">
            Took everything in me not to bawl while reading this thread. This
            initiative is writing the future of Nigeria. Please read and support
            ❤️
          </p>
        </div>

        <div className="border-solid border-[1px] border-black flex flex-col px-6 md:-mt-[5rem] sm:-mt-1 sm:px-2 -mt-7 py-4">
          <div className="flex gap-5 sm:gap-1">
            <div>
              <img src={Kate} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h2 className="">Kate Henshaw</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@HenshawKate</p>
            </div>
          </div>
          <p className="pl-[66px] sm:pl-0 ">
            Little drops make a mighty ocean. 🙏 Again I applaud you Tunde...
            You will never tire and great doors will be opened to you because
            you cared for others other than yourself..
          </p>
        </div>

        <div className="border-solid border-[1px]  border-black flex flex-col md:h-[19rem] md:-mt-[6rem] sm:-mt-[12.5rem] -mt-[75px] sm:px-2 sm:h-full px-5 py-4 h-52">
          <div className="flex gap-5">
            <div>
              <img src={Manji} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h2 className="">Manji Cheto</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@ChetoManji</p>
            </div>
          </div>
          <p className="pl-[66px] sm:pl-0">
            What a moving story. Well done t@Tunde_OD and team. I suspect we’ll
            hear more amazing stories about Ferdinand in the not-so-distant
            future.
          </p>
        </div>

        <div className="border-solid border-[1px] border-black flex flex-col sm:px-2 px-5 py-4">
          <div className="flex gap-5">
            <div>
              <img src={Rinu} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h2 className="">Rinu Oduala</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@SavvyRinu</p>
            </div>
          </div>
          <p className="pl-[66px] sm:pl-0 ">
            This is huge. Thank you for taking on these grassroots initiatives.
            Thank you Tunde 🙏
          </p>
        </div>
        <div className="border-solid border-[1px] border-black flex flex-col md:h-[16rem] md:-mt-1 sm:h-[14rem] h-48 sm:px-2 px-5 py-4  sm:-mt-[11.5rem] -mt-11">
          <div className="flex gap-5">
            <div>
              <img src={Paris} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h2 className="">ParisHilton.eth</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@ParisHilton</p>
            </div>
          </div>
          <p className="pl-[65px] pr-7 md:pr-3 sm:pr-0 sm:pl-0">
            My pleasure. 😇 Thank you for what you are doing to help these
            children. May God always bless you🙏❤️
          </p>
        </div>

        <div className="border-solid border-[1px]  border-black flex flex-col md:h-[26rem] sm:px-2 sm:h-[26rem] px-5 py-4 md:-mt-[10px] sm:mt-1 -mt-10 h-72">
          <div className="flex gap-5">
            <div>
              <img src={Latefat} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h2 className="md:text-lg">Lateef</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@LateefSaka</p>
            </div>
          </div>
          <p className="pl-20 sm:pl-0">
            This most likely the most beautiful thing I’ve seen on Twitter in a
            very long time. I love how these children and yound men have been
            shown and their stories without poverty or any preconceived bias
            being at the forefront.
          </p>
        </div>

        <div className="border-solid border-[1px] border-black flex flex-col sm:px-2 sm:-mt-[9.5rem] sm:h-full px-5 py-4">
          <div className="flex gap-5">
            <div>
              <img src={Macroni} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h2 className="">MrMacaroni</h2>
              <p className="text-[#5E5E5E] text-sm mb-5">@mrmacaronii</p>
            </div>
          </div>
          <p className="pl-[68px] sm:pl-0">
            Improving lives, developing the community and creating an enabling
            environment where every Nigerian Youth can succeed. This is what
            leadership should be about. Thank you @Tunder_OD This is absolutely
            inspiring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Walloffame;
