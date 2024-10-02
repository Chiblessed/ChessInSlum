import React from "react";
import Guardians from "../assets/TheGuardianlogo.png";
import Punch from "../assets/Punchlogo.png";
import BBC from "../assets/BBClogo.png";
import CNN from "../assets/CNNlogo.png";
import Newyorktimes from "../assets/NewYorklogo.png";
import Reuters from "../assets/Reuterslogo.png";
import France24 from "../assets/France24logo.png";
import "../components/Feature.css";

const Feature = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 feautre ">
      <h2 className="text-2xl">We're featured in</h2>
      <div>
        <div className="overflow-hidden py-10 px-0  whitespace-nowrap feturewrap">
          <div className=" flex sm:max-w-72">
            <img
              loading="lazy"
              src={CNN}
              alt=""
              className="w-20 featureitem featureitem1"
            />
            <img
              loading="lazy"
              src={BBC}
              alt=""
              className="w-20 featureitem featureitem2"
            />
            <img
              loading="lazy"
              src={Newyorktimes}
              alt=""
              className="w-20 featureitem featureitem3"
            />
            <img
              loading="lazy"
              src={France24}
              alt=""
              className="w-20 featureitem featureitem4"
            />
            <img
              loading="lazy"
              src={Punch}
              alt=""
              className="w-20 featureitem featureitem5"
            />
            <img
              loading="lazy"
              src={Reuters}
              alt=""
              className="w-20 featureitem featureitem6"
            />
            <img
              loading="lazy"
              src={Guardians}
              alt=""
              className="w-20 featureitem featureitem7"
            />
            <img
              loading="lazy"
              src={CNN}
              alt=""
              className="w-20 featureitem featureitem8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
