import React, { useEffect, useState } from "react";
import {
  AdminContainer,
  Header,
  MainContainer,
  PageError,
  AnimatedCoffeeMug,
  Menu,
  AboutUs,
} from "./components";
import { Route, Routes } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunction";
import { actionType } from "./context/reducer";

const App = () => {
  const [loading, setLoading] = useState(false);

  const [, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <AnimatePresence wait>
      {loading ? (
        <AnimatedCoffeeMug />
      ) : (
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />

          <main className="w-full">
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/admin" element={<AdminContainer />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="*" element={<PageError />} />
            </Routes>
          </main>
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;
