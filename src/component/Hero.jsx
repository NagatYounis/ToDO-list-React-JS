import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNote } from "../component/Todo/NoteContext";

const Hero = () => {
  const { user, notes, setuser } = useNote();
  const handlelogout = () => {
    localStorage.removeItem("user");
    setuser(null);
  };
  return (
    <div className="nav flex  items-center sm: p-5 gap-35  lg:gap-30 lg:justify-between w-full h-15 bg-pink-200  py-10 ">
      <Link to="/">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-100 sm: w-50 logo font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-300 to-pink-500 "
        >
          {user ? <h2>welcome {user}</h2> : " "}
          Write Your Notes
        </motion.div>
      </Link>
      <ul className=" gap-4 text-pink-900 lg:flex   mr-30  sm:hidden  md:hidden hidden">
        <Link to="/notes" className={ `     ${user ? ' ': " pointer-events-none opacity-50 cursor-not-allowed"}

 `}>
          {" "}
          <li 
            className="text-lg font-mediumm  
transition-transform duration-300 hover:scale-110  "


            style={{ position: "relative" }}
          >
            NoteList
            <span
              className="text-white bg-yellow-400 px-1 w-50 rounded-md "
              style={{ position: "absolute", bottom: "50%" }}
            >
              {" "}
              you have {notes.length} Notes
            </span>
       
          </li>
        </Link>
        
      </ul>

      <div className=" flex  items-center sm:gap-0  gap-10 ">
        {user ? (
          " "
        ) : (
          <button className="text-3xl font-bold text-rose-400  "></button>
        )}
        {user ? (
          <Link to="/Register">
            <button
              className="text-3xl font-bold text-purple-400"
              onClick={handlelogout}
            >
              Log out
            </button>
          </Link>
        ) : (
          <Link to="/Register">
            <button className="lg:text-3xl font-bold text-pink-400  sm:text-md">
              Register
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
