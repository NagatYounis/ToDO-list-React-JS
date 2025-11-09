import React, { useEffect, useState ,useRef} from "react";

const TodoAp = () => {
  const [note, setNote] = useState({ name: "" });
   const[isEdit,setedit]=useState(false);
     const[editinedx,seteditindex]= useState(null);
  const [list, setList] = useState( 

    localStorage.getItem('notes') ?  JSON.parse(localStorage.getItem('notes')): []
  );
  const inputRef = useRef(null);


  // useEffect(() => {
  //   console.log("List updated:", list);
  // }, [list]);

useEffect(()=>{
  localStorage.setItem('notes' , JSON.stringify(list))

},[list])
  const handleClick = (e) => {
    e.preventDefault(); // علشان الفورم ما يعملش reload
    if (note.name.trim() === "") return alert('enter your notes'); // تجاهل لو الإدخال فاضي
    
    if(isEdit){
      const updatelist = [...list];
      updatelist[editinedx].name = note.name;
      setList(updatelist)
      setedit(false)
      seteditindex(null)
    }
    else
    setList([...list, note]);
    setNote({ name: "" }); // مسح الـ input بعد الإضافة
  };
  const deleteNote=(name)=>{
 const indexx = list.findIndex((note) => note.name === name)
 console.log(indexx)
 if(indexx == -1 )return 
 const newar = [...list];
 const up = newar.filter((e,index)=>  index !== indexx)
setList([...up])
  }
 const updateData=(index)=>{
   setNote({ name: list[index].name});
  setedit(true)
seteditindex(index)
inputRef.current.focus();
 }
  console.log(list)

console.log(localStorage.getItem('notes'))
  return (
    <div
      className="container w-full p-5 mt-3 bg-red-300 flex justify-center items-center flex-col"
      style={{ height: "89vh" }}
    >
      <form className="form" onSubmit={handleClick}>
        <input
        ref={inputRef} 
          type="text"
          value={note.name}
          onChange={(e) => setNote({ name: e.target.value })}
          placeholder="Enter your notes"
          className="bg-white rounded-md p-3 border-red-700 border-2 outline-0"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-blue-600"
        >
          {isEdit ? "Update Note" : "Add Note"}
        </button>
      </form>

      <ul className="mt-5 w-85 p-5 text-amber-700 bg-amber-300 posito"  style={{height:'350px' , position:"relative"}}>
        {list.map((item, index) => (
          <li key={index} className="bg-white p-2 m-1 rounded-md shadow ">
            {item.name}
            <button className='' style={{position:"absolute" , cursor:"pointer ", right:"90px" }} onClick={()=>updateData(index)}>updata</button>
            <span style={{position:"absolute" , right:"27px" , cursor:"pointer" }} className="" onClick={()=>
              deleteNote(item.name)
            }>  delete</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAp;
