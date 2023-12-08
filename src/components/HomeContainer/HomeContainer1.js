import React from "react";
import "./HomeContainer.css";
import MainContainerImage from "../../../src/assests/img/mainImg.png";
import { Button } from "@mui/material";
// import Finisher from "../../../src/assests/img/mainImgFinisher.png";
import Data from "./HomeContainer.json";

const HomeContainer1 = () => {
  const { homeTitle, desc, order } = Data ?? {};

  return (
    <section>
      {/* Desktop View */}

      <div className="hidden md:flex w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <img src={MainContainerImage} alt="img" />
          <div className=" px-16">
            <h2 className="grid justify-center text-4xl leading-10 font-semibold tracking-normal mb-4">
              {homeTitle}
            </h2>
            <div className=" w-24 h-px xl:bg-darkGoldenBrown mx-auto mt-0"></div>
            <div
              style={{
                margin: "0 auto 70px auto",
              }}
            ></div>
            <h4 className="mainCont text-center text-base text-ellipsis overflow-hidden">
              {desc}
            </h4>
            <div className="flex items-center justify-center mt-12">
              <Button
                sx={{
                  color: "#b08e3d",
                  backgroundColor: "transparent",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "3px",
                  transition:
                    "background-color .2s ease-in-out, color .2s ease-in-out",
                  width: "75%",
                  "&:hover": {
                    backgroundColor: "#b08e3d",
                    color: "white",
                  },
                }}
              >
                {order}
              </Button>
            </div>
            {/* <div className="imageWrapper">
              <img src={Finisher} alt="imageEcoute" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Screen */}

      <div className="flex md:hidden w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <img src={MainContainerImage} alt="img" />
          <div
            style={{
              margin: "0 auto 50px auto",
            }}
          ></div>
          <h2 className="flex justify-center text-2xl leading-10 font-semibold tracking-normal">
            {homeTitle}
          </h2>
          <div className=" w-24 h-px bg-darkGoldenBrown mx-auto mt-0"></div>
          <div
            style={{
              margin: "0 auto 30px auto",
            }}
          ></div>
          <h4 className="mainContMS flex items-center text-center">{desc}</h4>
          <div className="flex items-center justify-center mt-8">
            <Button
              sx={{
                color: "#b08e3d",
                width: "75%",
                "&:hover": {
                  backgroundColor: "#b08e3d",
                  color: "white",
                },
              }}
            >
              {order}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer1;
