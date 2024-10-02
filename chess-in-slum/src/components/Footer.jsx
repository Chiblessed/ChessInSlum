import React from "react";
import Instagram from "../assets/Instagram logo.png";
import Facebook from "../assets/facebook logo.png";
import Twitter from "../assets/twitter logo.png";
import Linked from "../assets/linkedin logo.png";

const Footer = () => {
  return (
    <div className="h-full bg-[#0D101C] mx-[90px] md:mx-0 xl:mx-[6rem] sm:mx-0  mt-10 mb-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl  font-[700] pt-16 text-white">Support us</h2>
        <div className="text-white mt-14 flex gap-5">
          <button className=" border-solid border-2 rounded-full py-[5px] px-5 hover:scale-95">
            Donate
          </button>
          <button className=" border-solid border-2 rounded-full py-[5px] px-5 border-transparent hover:bg-transparent hover:border-[#C18E00] bg-[#C18E00]">
            Volunteer with us
          </button>
        </div>
        <hr className="w-[54rem] mt-28 mb-20  sm:w-[23rem] md:w-full" />
        <div className="flex sm:flex-col md:gap-56 sm:gap-10 justify-between gap-56 mb-10">
          <div className="w-56 ">
            <svg
              width="100"
              height="52"
              viewBox="0 0 62 42"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.672 19.192C3.69067 19.192 2.912 19.016 2.336 18.664C1.77067 18.3013 1.37067 17.8 1.136 17.16C0.901333 16.5093 0.784 15.7467 0.784 14.872V10.2C0.784 9.304 0.901333 8.536 1.136 7.896C1.37067 7.24533 1.77067 6.744 2.336 6.392C2.912 6.04 3.69067 5.864 4.672 5.864C5.632 5.864 6.37867 6.024 6.912 6.344C7.456 6.65333 7.84 7.09067 8.064 7.656C8.288 8.22133 8.4 8.872 8.4 9.608V10.728H5.6V9.432C5.6 9.176 5.584 8.93067 5.552 8.696C5.53067 8.46133 5.456 8.26933 5.328 8.12C5.2 7.96 4.98133 7.88 4.672 7.88C4.37333 7.88 4.14933 7.96 4 8.12C3.86133 8.28 3.77067 8.48267 3.728 8.728C3.696 8.96267 3.68 9.21333 3.68 9.48V15.576C3.68 15.864 3.70133 16.1307 3.744 16.376C3.79733 16.6107 3.89333 16.8027 4.032 16.952C4.18133 17.0907 4.39467 17.16 4.672 17.16C4.97067 17.16 5.184 17.0853 5.312 16.936C5.44 16.776 5.52 16.5733 5.552 16.328C5.584 16.0827 5.6 15.832 5.6 15.576V14.216H8.4V15.336C8.4 16.072 8.288 16.7333 8.064 17.32C7.85067 17.896 7.472 18.3547 6.928 18.696C6.39467 19.0267 5.64267 19.192 4.672 19.192ZM10.0236 19V6.04H12.8876V11.288H14.8876V6.04H17.7676V19H14.8876V13.336H12.8876V19H10.0236ZM19.7413 19V6.04H25.5653V7.992H22.6053V11.208H24.8613V13.192H22.6053V17.064H25.5973V19H19.7413ZM30.3375 19.192C29.5268 19.192 28.8495 19.048 28.3055 18.76C27.7615 18.472 27.3508 18.0293 27.0735 17.432C26.7962 16.824 26.6415 16.04 26.6095 15.08L29.0575 14.712C29.0682 15.2667 29.1162 15.7147 29.2015 16.056C29.2975 16.3973 29.4255 16.6427 29.5855 16.792C29.7562 16.9413 29.9588 17.016 30.1935 17.016C30.4922 17.016 30.6842 16.9147 30.7695 16.712C30.8655 16.5093 30.9135 16.296 30.9135 16.072C30.9135 15.5387 30.7855 15.0907 30.5295 14.728C30.2735 14.3547 29.9268 13.9813 29.4895 13.608L28.3695 12.632C27.8788 12.216 27.4628 11.7467 27.1215 11.224C26.7908 10.6907 26.6255 10.0347 26.6255 9.256C26.6255 8.15733 26.9508 7.32 27.6015 6.744C28.2522 6.15733 29.1375 5.864 30.2575 5.864C30.9508 5.864 31.5055 5.98133 31.9215 6.216C32.3482 6.45067 32.6682 6.76 32.8815 7.144C33.1055 7.51733 33.2548 7.91733 33.3295 8.344C33.4148 8.76 33.4628 9.16 33.4735 9.544L31.0095 9.848C30.9988 9.464 30.9722 9.13333 30.9295 8.856C30.8975 8.568 30.8228 8.34933 30.7055 8.2C30.5882 8.04 30.4068 7.96 30.1615 7.96C29.8948 7.96 29.6975 8.072 29.5695 8.296C29.4522 8.52 29.3935 8.744 29.3935 8.968C29.3935 9.448 29.5055 9.84267 29.7295 10.152C29.9642 10.4507 30.2682 10.7653 30.6415 11.096L31.7135 12.04C32.2788 12.52 32.7535 13.064 33.1375 13.672C33.5322 14.28 33.7295 15.032 33.7295 15.928C33.7295 16.536 33.5908 17.0907 33.3135 17.592C33.0362 18.0827 32.6415 18.472 32.1295 18.76C31.6282 19.048 31.0308 19.192 30.3375 19.192ZM38.3063 19.192C37.4956 19.192 36.8183 19.048 36.2743 18.76C35.7303 18.472 35.3196 18.0293 35.0423 17.432C34.7649 16.824 34.6103 16.04 34.5783 15.08L37.0263 14.712C37.0369 15.2667 37.0849 15.7147 37.1703 16.056C37.2663 16.3973 37.3943 16.6427 37.5543 16.792C37.7249 16.9413 37.9276 17.016 38.1623 17.016C38.4609 17.016 38.6529 16.9147 38.7383 16.712C38.8343 16.5093 38.8823 16.296 38.8823 16.072C38.8823 15.5387 38.7543 15.0907 38.4983 14.728C38.2423 14.3547 37.8956 13.9813 37.4583 13.608L36.3383 12.632C35.8476 12.216 35.4316 11.7467 35.0903 11.224C34.7596 10.6907 34.5943 10.0347 34.5943 9.256C34.5943 8.15733 34.9196 7.32 35.5703 6.744C36.2209 6.15733 37.1063 5.864 38.2263 5.864C38.9196 5.864 39.4743 5.98133 39.8903 6.216C40.3169 6.45067 40.6369 6.76 40.8503 7.144C41.0743 7.51733 41.2236 7.91733 41.2983 8.344C41.3836 8.76 41.4316 9.16 41.4423 9.544L38.9783 9.848C38.9676 9.464 38.9409 9.13333 38.8983 8.856C38.8663 8.568 38.7916 8.34933 38.6743 8.2C38.5569 8.04 38.3756 7.96 38.1302 7.96C37.8636 7.96 37.6663 8.072 37.5383 8.296C37.4209 8.52 37.3623 8.744 37.3623 8.968C37.3623 9.448 37.4743 9.84267 37.6983 10.152C37.9329 10.4507 38.2369 10.7653 38.6102 11.096L39.6823 12.04C40.2476 12.52 40.7223 13.064 41.1063 13.672C41.5009 14.28 41.6983 15.032 41.6983 15.928C41.6983 16.536 41.5596 17.0907 41.2823 17.592C41.0049 18.0827 40.6103 18.472 40.0983 18.76C39.5969 19.048 38.9996 19.192 38.3063 19.192ZM47.1948 19V6.04H50.0588V19H47.1948ZM51.9913 19V6.04H54.0073L56.6633 12.28V6.04H59.0312V19H57.0953L54.4393 12.28V19H51.9913Z"
                fill="white"
              />
              <path d="M0 21H60.0073V21.8H0V21Z" fill="white" />
              <path
                d="M8.604 27.308C8.16 27.08 7.674 26.882 7.146 26.714C6.618 26.546 6.102 26.462 5.598 26.462C4.902 26.462 4.344 26.624 3.924 26.948C3.516 27.272 3.312 27.704 3.312 28.244C3.312 28.652 3.444 29 3.708 29.288C3.972 29.564 4.32 29.804 4.752 30.008C5.184 30.212 5.634 30.404 6.102 30.584C6.51 30.74 6.912 30.914 7.308 31.106C7.704 31.298 8.058 31.538 8.37 31.826C8.694 32.114 8.946 32.468 9.126 32.888C9.318 33.308 9.414 33.83 9.414 34.454C9.414 35.138 9.24 35.762 8.892 36.326C8.556 36.89 8.07 37.334 7.434 37.658C6.798 37.982 6.042 38.144 5.166 38.144C4.59 38.144 4.038 38.078 3.51 37.946C2.994 37.814 2.514 37.646 2.07 37.442C1.626 37.226 1.23 37.004 0.882 36.776L1.656 35.408C1.944 35.612 2.274 35.81 2.646 36.002C3.018 36.182 3.408 36.332 3.816 36.452C4.224 36.56 4.62 36.614 5.004 36.614C5.412 36.614 5.814 36.542 6.21 36.398C6.618 36.242 6.954 36.008 7.218 35.696C7.482 35.384 7.614 34.97 7.614 34.454C7.614 34.01 7.494 33.644 7.254 33.356C7.026 33.056 6.72 32.804 6.336 32.6C5.952 32.384 5.544 32.192 5.112 32.024C4.704 31.868 4.29 31.7 3.87 31.52C3.45 31.328 3.06 31.1 2.7 30.836C2.34 30.56 2.052 30.224 1.836 29.828C1.62 29.432 1.512 28.952 1.512 28.388C1.512 27.704 1.674 27.11 1.998 26.606C2.334 26.09 2.79 25.688 3.366 25.4C3.942 25.1 4.602 24.938 5.346 24.914C6.186 24.914 6.924 25.016 7.56 25.22C8.208 25.424 8.778 25.676 9.27 25.976L8.604 27.308ZM12.3486 24.986H14.0946V36.326H20.7006V38H12.3486V24.986ZM25.1118 33.392C25.1118 33.98 25.2498 34.508 25.5258 34.976C25.8138 35.432 26.1918 35.792 26.6598 36.056C27.1278 36.32 27.6558 36.452 28.2438 36.452C28.8558 36.452 29.4018 36.32 29.8818 36.056C30.3618 35.792 30.7398 35.432 31.0158 34.976C31.2918 34.508 31.4298 33.98 31.4298 33.392V24.986H33.1398V33.446C33.1398 34.394 32.9178 35.222 32.4738 35.93C32.0418 36.638 31.4538 37.184 30.7098 37.568C29.9778 37.952 29.1558 38.144 28.2438 38.144C27.3318 38.144 26.5098 37.952 25.7778 37.568C25.0458 37.184 24.4638 36.638 24.0318 35.93C23.5998 35.222 23.3838 34.394 23.3838 33.446V24.986H25.1118V33.392ZM36.7118 38V24.572H36.7298L43.5518 34.256L42.8138 34.112L49.6178 24.572H49.6538V38H47.9258V28.532L48.0338 29.414L43.1198 36.362H43.0838L38.0978 29.414L38.4038 28.604V38H36.7118ZM60.1255 27.308C59.6815 27.08 59.1955 26.882 58.6675 26.714C58.1395 26.546 57.6235 26.462 57.1195 26.462C56.4235 26.462 55.8655 26.624 55.4455 26.948C55.0375 27.272 54.8335 27.704 54.8335 28.244C54.8335 28.652 54.9655 29 55.2295 29.288C55.4935 29.564 55.8415 29.804 56.2735 30.008C56.7055 30.212 57.1555 30.404 57.6235 30.584C58.0315 30.74 58.4335 30.914 58.8295 31.106C59.2255 31.298 59.5795 31.538 59.8915 31.826C60.2155 32.114 60.4675 32.468 60.6475 32.888C60.8395 33.308 60.9355 33.83 60.9355 34.454C60.9355 35.138 60.7615 35.762 60.4135 36.326C60.0775 36.89 59.5915 37.334 58.9555 37.658C58.3195 37.982 57.5635 38.144 56.6875 38.144C56.1115 38.144 55.5595 38.078 55.0315 37.946C54.5155 37.814 54.0355 37.646 53.5915 37.442C53.1475 37.226 52.7515 37.004 52.4035 36.776L53.1775 35.408C53.4655 35.612 53.7955 35.81 54.1675 36.002C54.5395 36.182 54.9295 36.332 55.3375 36.452C55.7455 36.56 56.1415 36.614 56.5255 36.614C56.9335 36.614 57.3355 36.542 57.7315 36.398C58.1395 36.242 58.4755 36.008 58.7395 35.696C59.0035 35.384 59.1355 34.97 59.1355 34.454C59.1355 34.01 59.0155 33.644 58.7755 33.356C58.5475 33.056 58.2415 32.804 57.8575 32.6C57.4735 32.384 57.0655 32.192 56.6335 32.024C56.2255 31.868 55.8115 31.7 55.3915 31.52C54.9715 31.328 54.5815 31.1 54.2215 30.836C53.8615 30.56 53.5735 30.224 53.3575 29.828C53.1415 29.432 53.0335 28.952 53.0335 28.388C53.0335 27.704 53.1955 27.11 53.5195 26.606C53.8555 26.09 54.3115 25.688 54.8875 25.4C55.4635 25.1 56.1235 24.938 56.8675 24.914C57.7075 24.914 58.4455 25.016 59.0815 25.22C59.7295 25.424 60.2995 25.676 60.7915 25.976L60.1255 27.308Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="flex gap-20 sm:gap-5 ">
            <div className=" text-white">
              <h2 className="text-xl mb-3">Contact us</h2>
              <div className="flex gap-2 mb-4">
                <img src={Instagram} className="w-6" alt="" />
                Instagram
              </div>
              <div className="flex gap-2 mb-4">
                <img src={Twitter} className="w-6" alt="" />
                Twitter
              </div>
              <div className="flex gap-2 mb-4">
                <img src={Facebook} className="w-6" alt="" />
                Facebook
              </div>
              <div className="flex gap-2 mb-4">
                <img src={Linked} className="w-6" alt="" />
                LinkedIn
              </div>
            </div>
            <div className=" text-white">
              <h2 className="text-xl mb-3">About us</h2>
              <p className="mb-4">The Initiative</p>
              <p className="mb-4">Team</p>
              <p className="mb-4">Contact</p>
              <p className="mb-4">Youtube</p>
            </div>
            <div className=" text-white">
              <h2 className="text-xl mb-4">More</h2>
              <p className="mb-4">Merchandise</p>
              <p className="mb-4">Donate</p>
              <p className="mb-4">Volunter</p>
              <p className="mb-4">News</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
