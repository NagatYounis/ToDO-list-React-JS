import React,  {createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();


export const NoteProvider = ({children})=>{
  const [user , setuser] = useState("")
const [notes, setnotes] = useState(() => {
  const saved = localStorage.getItem("notes");
  return saved ? JSON.parse(saved) : [];
});


 useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setuser(JSON.parse(savedUser)); // نرجع القيم كـ object
    }
  }, []);

  // ⬇️ كل مرة المستخدم يتغير، نحفظه في localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
const addnote =(name)=>{

    setnotes([...notes, name])
}

const deletenote =(id)=>{
    setnotes(notes.filter(( note)=> note.id != id))
}
 const updatenote = (id, newName) => {
    const updated = notes.map((note) =>
      note.id === id ? { ...note, text: newName } : note
    );
    setnotes(updated);
  };

return(

    <NoteContext.Provider value={{notes , addnote , deletenote , updatenote , user ,setuser}}>
{children}
    </NoteContext.Provider>
)
};
export const useNote =  ()=> useContext(NoteContext);
