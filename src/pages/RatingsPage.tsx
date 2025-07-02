import React from "react";

import growIcon from "./../assets/images/trusticon1.svg"
import fyerIcon from "./../assets/images/trusticon2.svg"
import deltaIcon from "./../assets/images/trusticon3.svg"
import dhaIcon from "./../assets/images/trusticon4.svg"

const platforms = [
  {
    name: "Groww",
    description: "India's Leading Investment Platform",
    image: growIcon, 
  },
  {
    name: "Fyers",
    description: "Advanced Trading Platform",
    image: fyerIcon,
  },
  {
    name: "Delta Exchange",
    description: "Crypto Derivatives Platform",
    image: deltaIcon,
  },
  {
    name: "Zerodha",
    description: "India's Largest Broker",
    image: dhaIcon,
  },
];

const RatingPage = () => {
  return (
    <section className="bg-[#FFFBFD] py-16 px-4 text-center w-full mt-28 mb-36">
      <div className="max-w-[1320px] mx-auto">
        <div className="inline-block bg-[#FFE2F0] text-[#A12C66] px-5 pb-[7px] pt-[9px] rounded-full font-medium mb-6">
          Trusted & Verified
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold text-[#141219] mb-4">
          Trusted by Leading Trading Platforms
        </h2>

        <p className="text-[#141219] text-[16px] sm:text-[18px] leading-6 font-medium mx-auto mb-16 max-w-full sm:max-w-[90%] md:max-w-[49%]">
          I work closely with India’s top brokers and platforms to bring you the most effective trading strategies and tools.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto px-2">
          {platforms.map((item, index) => (
            <div
              key={index}
              className="flex flex-col dropsd8 sm:flex-row items-center bg-white text-[#141219] rounded-[24px] p-6 sm:p-7 gap-6 sm:gap-10 text-center sm:text-left"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
              <div>
                <h3 className="text-[22px] sm:text-[26px] font-semibold">{item.name}</h3>
                <p className="text-[16px] sm:text-[18px] leading-6 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 sm:mt-16 cursor-pointer text-[16px] sm:text-[18px] hover:bg-[#911454] hover:text-white text-[#A12C66] font-medium px-8 sm:px-12 pb-3 pt-3 sm:pt-4 rounded-[8px] border border-[#A12C66] transition">
          See all
        </button>
      </div>
    </section>
  );
};

export default RatingPage;
