import React from "react";
import "./HomeContainer.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Data from "./HomeContainer.json";
import { useNavigate } from "react-router";

const HomeContainer1 = () => {
  const navigate = useNavigate();
  const { title, subTitle, subTitle1, content = [], location } = Data ?? {};
  const handleNavigate = () => {
    navigate(`/aboutus`);
  };
  return (
    <section>
      {/* Desktop View */}
      {/* Home Section 2 */}
      <div className="hidden md:grid w-full h-full">
        <div className=" mt-32 grid grid-cols-1 md:grid-cols-1 gap-2">
          <h2 className="grid justify-center text-4xl leading-10 font-semibold tracking-normal mb-4">
            {title}
          </h2>
          <p className="grid justify-center mb-4">
            {subTitle}
            <span className="grid justify-center">{subTitle1}</span>
          </p>
        </div>
        <div className=" mt-4 grid grid-cols-1 md:grid-cols-4 gap-2">
          {content?.map((item) => {
            return (
              <div key={item?.id}>
                <motion.div
                  className="imageWrapper"
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
                >
                  <img src={item?.image} alt="img" />
                </motion.div>
                <div className="descWrapper">
                  <h4 className=" text-2xl title my-5">{item?.title}</h4>
                  <p className="desc">{item?.subContent}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-32 mb-20">
          <Button
            sx={{
              color: "#b08e3d",
              backgroundColor: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              borderRadius: "3px",
              transition:
                "background-color .2s ease-in-out, color .2s ease-in-out",
              width: "25%",
              "&:hover": {
                backgroundColor: "#b08e3d",
                color: "white",
              },
            }}
            onClick={handleNavigate}
          >
            {location}
          </Button>
        </div>
      </div>

      {/* Mobile Screen */}

      <div className="grid md:hidden w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div
            style={{
              margin: "0 auto 50px auto",
            }}
          ></div>
          <h2 className="flex justify-center text-2xl leading-10 font-semibold tracking-normal">
            {title}
          </h2>
          <div className=" w-24 h-px bg-darkGoldenBrown mx-auto mt-0"></div>
          <div
            style={{
              margin: "0 auto 30px auto",
            }}
          ></div>
          <div className=" mt-4 grid grid-cols-1 md:grid-cols-1 gap-2">
            {content?.map((item) => {
              return (
                <div key={item?.id}>
                  <motion.div
                    className="imageWrapper"
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -180,
                      borderRadius: "100%",
                    }}
                  >
                    <img src={item?.image} alt="img" />
                  </motion.div>
                  <div className="descWrapper">
                    <h4 className=" text-2xl title my-5">{item?.title}</h4>
                    <p className="desc">{item?.subContent}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
              {location}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer1;
