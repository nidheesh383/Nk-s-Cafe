import React, { useEffect, useState } from "react";
import HomeContainer from "../HomeContainer";
import { motion } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RowContainer from "./RowContainer";
import { useStateValue } from "../../context/StateProvider";
import HomeContainer3 from "../HomeContainer/HomeContainer3";
import CartContainer from "../CartContainer/CartContainer";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className=" mt-32 md:mt-36 px-4 md:px-16 py-4 ">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-lightGoldenBrown to-lightGoldenBrown transition-all ease-in-out duration-100">
            Our fresh & healthy salads
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-chevronBrown hover:bg-lightGoldenBrown cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <ChevronLeftIcon className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-chevronBrown hover:bg-lightGoldenBrown cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <ChevronRightIcon className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          // We are filtering the data of fruits here from the foodItems {change fruits to salads}
          data={foodItems?.filter((n) => n.category === "salads")}
        />
      </section>
      <HomeContainer3 />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
