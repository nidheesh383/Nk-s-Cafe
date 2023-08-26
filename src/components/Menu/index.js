import React from "react";
import Starter from "../../../src/assests/img/mainImgStarter.png";
import ChocoStrawberry from "../../../src/assests/img/chcostraw.png";
import Tart from "../../../src/assests/img/tart.png";
import Caramel from "../../../src/assests/img/caramel.png";
import MenuCraft from "../../../src/assests/img/menucrafft.png";
import TableComp from "./Table";
import Data1 from "./TableData1.json";
import Data2 from "./TableData2.json";
import Data3 from "./TableData3.json";
import Data4 from "./TableData4.json";
import data from "./data.json";
import Footer from "../Footer";

const Menu = () => {
  const {
    header,
    inrP1,
    header1,
    headerDesc1,
    inrP2,
    header2,
    headerDesc2,
    inrP3,
    header3,
    headerDesc3,
  } = data ?? {};
  return (
    <>
      <div className="hidden md:grid mt-18 md:mt-20 px-4 md:px-16 py-4 w-full h-full">
        <div>
          <div className="flex justify-center">
            <img src={Starter} alt="imageEcoute" />
          </div>
        </div>
        <div>
          <h2 className=" text-center text-4xl text-darkBrown mt-14 leading-10 font-nid tracking-normal">
            {header}
          </h2>
        </div>
        <div
          style={{
            margin: "0 auto 20px auto",
          }}
        ></div>
        <div className=" w-24 h-px bg-darkGoldenBrown mx-auto mt-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-32">
          <img className=" ml-40 mb-10" src={ChocoStrawberry} alt="img" />
          <div className=" ml-40 mt-10">
            <h2 className="grid justify-center text-3xl font-nid leading-10 tracking-normal mb-4">
              {inrP1}
            </h2>
            <h3 className="grid justify-center text-4xl leading-10 font-semibold tracking-normal mb-4">
              {header1}
            </h3>
            <div className=" flex justify-center">
              <img src={MenuCraft} alt="imageEcoute" />
            </div>
            <h4 className="mainCont text-center mt-5">{headerDesc1}</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-32">
          <div className=" ml-40 mt-10">
            <h2 className="grid justify-center text-3xl font-nid leading-10 tracking-normal mb-4">
              {inrP2}
            </h2>
            <h3 className="grid justify-center text-4xl leading-10 font-semibold tracking-normal mb-4">
              {header2}
            </h3>
            <div className=" flex justify-center">
              <img src={MenuCraft} alt="imageEcoute" />
            </div>
            <h4 className="mainCont text-center mt-5">{headerDesc2}</h4>
          </div>
          <img className=" ml-40 mb-10" src={Tart} alt="img" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-32">
          <img className=" ml-40 mb-10" src={Caramel} alt="img" />
          <div className=" ml-40 mt-10">
            <h2 className="grid justify-center text-3xl font-nid leading-10 tracking-normal mb-4">
              {inrP3}
            </h2>
            <h3 className="grid justify-center text-4xl leading-10 font-semibold tracking-normal mb-4">
              {header3}
            </h3>
            <div className=" flex justify-center">
              <img src={MenuCraft} alt="imageEcoute" />
            </div>
            <h4 className="mainCont text-center mt-5">{headerDesc3}</h4>
          </div>
        </div>
      </div>
      <TableComp Data={Data1} />
      <TableComp Data={Data2} />
      <TableComp Data={Data3} />
      <TableComp Data={Data4} />
      <div className=" pt-32 "></div>
      <Footer />
    </>
  );
};

export default Menu;
