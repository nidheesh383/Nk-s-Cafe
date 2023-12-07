import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "./data.json";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Loader from "./Loader.js";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Starter from "../../../src/assests/img/mainImgStarter.png";
import { storage } from "../../firebase.config";
import { getAllFoodItems, saveNewItem } from "../../utils/firebaseFunction";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import categoriesData from "../../utils/data.json";
import Footer from "../Footer";

const AdminContainer = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alertErr, setAlertErr] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [dispatch] = useStateValue();

  const {
    adCont = "",
    uploadTxt = "",
    contTitle = "",
    inr = "",
    actionBtn = {},
  } = data ?? {};
  const { categories = [] } = categoriesData ?? {};

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    // * Usage of this is to store the data to firebase Db in firebase storage website I have an Images file the Image file is stored in that path
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    // Firebase Uploading
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    // to calculate bytes how bytes its uploaded to firebase
    uploadTask.on(
      "state_changed",
      // Snapshot means image has been successfully uploaded
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(uploadProgress);
      },
      // By anychance if there is no upload progress then
      (error) => {
        console.log(error);
        setAlertErr(true);
        setMsg("Error while uploading : Try Again later");
        setTimeout(() => {
          setAlertErr(false);
          setIsLoading(false);
        }, 4000);
      },
      // If everything is perfect then
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setAlertErr(true);
          setMsg("Image Successfully Uploaded");
          setAlertStatus("Success");
          setTimeout(() => {
            setAlertErr(false);
          }, 4000);
        });
      }
    );
  };
  // remove items from db
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setAlertErr(true);
      setMsg("Image Successfully Deleted");
      setAlertStatus("danger");
      setTimeout(() => {
        setAlertErr(false);
      }, 4000);
    });
  };
  // this function is for saving the data
  const handleFormSubmit = () => {
    setIsLoading(true);
    try {
      if (!title || !category || !imageAsset || !price) {
        setAlertErr(true);
        setMsg("Required Field can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setAlertErr(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          qty: 1,
          price: price,
        };
        saveNewItem(data);
        setIsLoading(false);
        setAlertErr(true);
        setMsg("Data Successfully Uploaded");
        setAlertStatus("Success");
        setTimeout(() => {
          setAlertErr(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setAlertErr(true);
      setMsg("Required Field can't be empty");
      setTimeout(() => {
        setAlertErr(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset("");
    setCategory("Select Category");
    setPrice("");
  };

  // whenever uploading a new data this function will add it to the state provider so that the new data will be updated accordingly foodItems will be updated accordingly
  const fetchData = useCallback(async () => {
    try {
      const data = await getAllFoodItems();
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    } catch (error) {
      // Handle error appropriately, e.g., log or show an error message
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="flex justify-center pt-40 ">
        <img src={Starter} alt="imageEcoute" />
      </div>
      <div>
        <h2 className=" text-center text-2xl text-darkBrown mt-8 leading-10 font-nid tracking-normal">
          {adCont}
        </h2>
      </div>
      <div
        style={{
          margin: "0 auto 20px auto",
        }}
      ></div>
      <div className="w-24 h-px bg-darkGoldenBrown mx-auto mt-0"></div>
      <div className="flex items-center justify-center mt-10">
        <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
          {alertErr && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                alertStatus === "danger" ? "bg-red-600" : "bg-green-500"
              }`}
            >
              {msg}
            </motion.p>
          )}
          <div className="pt-10">
            <input
              required
              id="title"
              placeholder={contTitle}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 outline-none"
            />
            <FastfoodIcon className="absolute top-3 left-3 text-gray-500" />
          </div>

          <div>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-52 outline-none text-base border-b-2 border-gray-300 p-2 rounded-md cursor-pointer bg-transparent mt-10 "
            >
              <option>Select Category</option>
              {categories &&
                categories.map((item) => (
                  <option
                    key={item?.id}
                    className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                    value={item?.urlParamName}
                  >
                    {item?.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg mt-10">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!imageAsset ? (
                  <>
                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                        <CloudUploadIcon className="text-gray-500 text-3xl hover:text-gray-700" />
                        <p className="text-gray-500 hover:text-gray-700">
                          {uploadTxt}
                        </p>
                      </div>
                      <input
                        type="file"
                        name="uploadImage"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      />
                    </label>
                  </>
                ) : (
                  <>
                    {/* Incase if there is a Asset(Img) and it only displayed only if there is Asset then it will show */}
                    <div className="relative h-full">
                      <img
                        src={imageAsset}
                        alt="upload"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="submit"
                        className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                        onClick={deleteImage}
                      >
                        <DeleteForeverIcon className="text-white" />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="pt-10 relative">
            <input
              id="input-with-icon-textfield"
              type="number"
              placeholder={inr}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 outline-none"
            />
          </div>
          <div className="flex items-center justify-center mt-10">
            <Button
              sx={{
                width: "75%",
                backgroundColor: "#b08e3d",
                color: "white",
                "&:hover": {
                  backgroundColor: "#D7B25E",
                  color: "white",
                },
              }}
              onClick={handleFormSubmit}
              variant="contained"
            >
              {actionBtn?.save}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminContainer;
