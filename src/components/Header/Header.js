import React, { useEffect, useState } from "react";
import Logo from "../../assests/img/logo.png";
import Avatar from "../../assests/img/avatar.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LogoutIcon from "@mui/icons-material/Logout";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [menu, setMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        // eslint-disable-next-line no-unused-vars
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setMenu(!menu);
    }
  };

  const logout = () => {
    setMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  // to Show the cart
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  const scrollDirection = useScrollDirection();

  return (
    // <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} w-screen z-50  md:p-6 md:px-16 bg-transparent`}>
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-top-124" : "top-0"
      } px-16 z-50 bg-transparent transition-all duration-500 backdrop-blur-sm`}
    >
      {/* Desktop & Tablet View */}

      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="items-center gap-2">
          <img src={Logo} className="h- inline" alt="logo" />
          <p
            style={{
              fontFamily: '"Rubik Iso", cursive',
              marginTop: "-3rem",
              marginLeft: "3rem",
              padding: "30px",
              color: "#d17204",
            }}
            className="text-headingColor text-xl font-bold font-serif pt-8"
          >
            Café Nk
          </p>
        </div>
        <div className="flex items-center">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li
              className="text-base text-textColor hover:text-textColor cursor-pointer duration-100 transition-all ease-in-out"
              onClick={() => setMenu(false)}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className="text-base text-textColor hover:text-textColor cursor-pointer duration-100 transition-all ease-in-out"
              onClick={() => setMenu(false)}
            >
              <Link to={"/menu"}>Menu</Link>
            </li>
            <Link to="/aboutus">
              <li
                className="text-base text-textColor hover:text-textColor cursor-pointer duration-100 transition-all ease-in-out"
                onClick={() => setMenu(false)}
              >
                About Us
              </li>
            </Link>
          </motion.ul>
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <ShoppingBasketIcon className=" text-textColor text-2xl ml-8 cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className=" text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              className=" w-8 rounded-full min-h-[40px] min-w-[40px] shadow-xl ml-[26px] cursor-pointer"
              src={user ? user.photoURL : Avatar}
              alt="avatar"
              onClick={login}
            />
            {menu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "restaurantapp24@gmail.com" && (
                  <Link to={"/admin"}>
                    <p
                      className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base"
                      onClick={() => setMenu(false)}
                    >
                      New Item
                      <AddIcon />
                    </p>
                  </Link>
                )}

                <p
                  className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base"
                  onClick={logout}
                >
                  Logout <LogoutIcon />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <ShoppingBasketIcon className="text-textColor text-2xl ml-8 cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <div
            style={{
              padding: "0.5rem",
            }}
          >
            <img src={Logo} className="w-16 h-24 object-cover" alt="logo" />
            <p
              style={{
                fontFamily: '"Rubik Iso", cursive',
                marginTop: "-3rem",
                paddingTop: "30px",
                color: "#d17204",
              }}
              className="text-headingColor text-xl font-bold font-serif pt-8"
            >
              Café Nk
            </p>
          </div>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            className=" w-8 rounded-full min-h-[40px] min-w-[40px] shadow-xl ml-[26px] cursor-pointer"
            src={user ? user.photoURL : Avatar}
            alt="avatar"
            onClick={login}
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              <Link to={"/"}>
                <p className=" px-4 py-2 flex items-center gap-3  cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base">
                  Home
                  <HomeIcon />
                </p>
              </Link>
              <Link to={"/admin"}>
                <p className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base">
                  New Item
                  <AddIcon />
                </p>
              </Link>
              <Link to="/menu">
                <p className=" px-4 py-2 flex items-center gap-3  cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base">
                  Menu
                  <RestaurantMenuIcon />
                </p>
              </Link>
              <Link to="/aboutus">
                <p className=" px-4 py-2 flex items-center gap-3  cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base">
                  About Us
                  <InfoIcon />
                </p>
              </Link>
              <p
                className=" m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 text-textColor text-base "
                onClick={logout}
              >
                Logout <LogoutIcon />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
