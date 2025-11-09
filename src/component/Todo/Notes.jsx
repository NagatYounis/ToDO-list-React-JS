import React, { useEffect, useRef, useState } from "react";
import { useNote } from "./NoteContext";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MotionWrapper from "../../component/Motion/MotionWrapper";
const Notes = () => {
  const inpuut = useRef();
  const { user,notes, addnote, deletenote, updatenote } = useNote();
  const [note, setnote] = useState(" ");
  const [indexx, setindex] = useState(null);
  const [styl, setsyl] = useState(false);

  const now = new Date();
  let formatetime = now.toLocaleString("ar-EG", {
    dateStyle: "short",
    timeStyle: "short",
  });
  const newNote = {
    id: Date.now(),
    text: note,
    date: formatetime,
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (note.trim() === "") {
      alert("enter note");
    } else if (indexx !== null) {
      updatenote(indexx, note);
      setindex(null);
      setsyl(false);
    } else {
      addnote(newNote);
    }
    setnote("");
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
  <div className="flex flex-col lg:flex-row lg:gap-50 sm:gap-10  items-center  justify-between w-full ">
    <h1 className="  text-6xl md:p-5  font-bold w-150 h-140 mt-30 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-pink-300 to-pink-500">
    <TypeAnimation
        sequence={[
          "to your notes app 📒",
          1500,
          "",
          500,
          "organize your ideas 💡",
          1500,
          "",
          500,
          "stay productive ⚡",
          1500,
        ]}
        speed={60}
        repeat={Infinity}
        wrapper="span"
        className=" text-rose-200 font-semibold "
      />

    
    stay focused,stay productive,<span>and get more done</span></h1>

    <div className="flex flex-col items-center  h-140 ">
  
      <MotionWrapper variant="slideUp">
        <div className=" ml-4 flex  justify-center items-center flex-col w-full">
          <p className=" text-3xl bg-pink-200 p-5 rounded-md hover:bg-pink-300">
            <FaRegEdit />
          </p>
          <h1 className="text-3xl font-bold text-center mb-6 text-pink-700">
            Notes App
          </h1>
        </div>
      </MotionWrapper>

      <MotionWrapper variant="slideUp" delay={0.3}>
        <form
          onSubmit={handlesubmit}
          className={`  w-90 text-amber-50  border-2 flex justify-around h-12 rounded-3xl ${
            styl ? " bg-pink-300 text-black" : " bg-pink-400"
          }`}
        >
          <input
            ref={inpuut}
            className="w-50 border-0 outline-0 h-12 "
            type="text"
            placeholder="entertext"
            value={note}
            onChange={(e) => setnote(e.target.value)}
          />

          <button type="submit">
            {indexx !== null ? "update" : "submit"}{" "}
          </button>
        </form>
      </MotionWrapper>
      <ul className={` px-4 py-3 mt-2 w-full ${notes.length > 3 ? " grid grid-cols-3 gap-4 h-300" : " h-200" } `}>
        {notes.map((item, index) => (
         <MotionWrapper variant="slideUp" delay={0.5}>
 <li
          
            className={`note    ${notes.length > 3 ? " w-40  h-max text-sm flex-wrap" : "w-100  h-50 text-xl lg:w-150 lg:h-20"} rounded-2xl p-2  flex   gap-8  my-3 text-amber-100  `} 
            key={index}
          >
          <div className={`${user ? "aps active" : "aps"}`}></div>
            <div className="flex flex-col w-200 ">
              <span className=" h-30">{item.text} </span>
              <span style={{ fontSize: "10px" }}>{item.date} </span>
            </div>
            <div
              className="flex 
             items-center  "
            >
              <button
                onClick={() => {
                  setindex(item.id);
                  inpuut.current.focus();
                  setsyl(!styl);
                  setnote(item.text);
                }}
              >
                <CiEdit />
              </button>
              {styl ? (
                <span> </span>
              ) : (
                <button
                  className="mx-2"
                  onClick={() => {
                    deletenote(item.id);
                    setnote("");
                  }}
                >
                  {" "}
                  <MdDelete />
                </button>
              )}
            </div>
          </li>
         </MotionWrapper>
         
        ))}
      </ul>
    </div>



  </div>
  );
};

export default Notes;
