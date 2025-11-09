import React, { useEffect, useState } from 'react'
import { useNote } from '../component/Todo/NoteContext';
import { CiCircleCheck } from "react-icons/ci";

const Notes = () => {
 const { notes} = useNote(); 
 const [selectedIndexes, setSelectedIndexes] = useState(() => {
    const saved = localStorage.getItem("selectedIndexes");
    if (saved && saved !== "undefined") {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

   useEffect(() => {
    localStorage.setItem("selectedIndexes", JSON.stringify(selectedIndexes));
  }, [selectedIndexes]);

  // 🖱️ لما أضغط على كارت → يضيف أو يشيله من المصفوفة
  const handleClick = (index) => {
    setSelectedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // لو متعلم عليه → نشيله
        : [...prev, index] // لو مش متعلم عليه → نضيفه
    );
  };
 return (
    <div className='flex justify-center gap-12 p-3' style={{position: 'relative'}}>
      {notes.map((item,index)=>{

        const isactive = selectedIndexes.includes(index);
        return(

            <div onClick={()=> handleClick(index)} className={`card flex flex-col justify-between relative w-40 p-2  pt-10 h-60 rounded-2xl
   
   ${isactive ? "bg-green-200 border-2 border-green-500" : "bg-white"} transition-transform duration-300 hover:scale-110`} key={index}>
   <h5  className='absolute bg-amber-300 text-white p-2'  style={{bottom : "100%", left:"90%"}}  >{index + 1}</h5>

    <span className='text-green-500 ' style={{position:'absolute', zIndex:"100", top:"5%", left:'50px'}}>{isactive && "done"}</span>

    <h3 className="title">{item.text}</h3>
  <div style={{position:'absolute' , bottom:'10%' , left :"80%",}}>   {isactive &&   <CiCircleCheck />}</div>
    <span className="title text-xs">{item.date}</span>

   </div>
        )
 


      })}
    </div>
  )
}

export default Notes
