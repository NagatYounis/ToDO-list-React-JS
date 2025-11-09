import React,  { useEffect, useState } from 'react'
import { Route , Routes , Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './App.css'
import Hero from './component/Hero'
import Home from './component/Home'
import TodoAp from './component/Todo/TodoAp'
import Notes from './component/Todo/Notes';
import Register from './Pages/Register'
import SignupForm from './Pages/Register';
import NotesList from './Pages/NotesList'
import Homee from './Pages/Homee';
function App() {
  const[x ,setx]= useState();
  const[y,sety] =useState();

  useEffect(()=>{

const handelmousemove = (e)=>{
  setx(e.clientX - 20)
  sety(e.clientY - 20)
}
window.addEventListener('mousemove' , handelmousemove)
return ()=>{
  window.removeEventListener('mousemove', handelmousemove)
}
  },[])
  return (
    <div className=' flex  gap-10 items-center w-full h-screen flex-col h-screen w-full bg-blue-400'>
     
    <motion.div
    animate=
    {{
      x,
      y,
    }}
     className="cursor"></motion.div>
      <Hero/>
   {/*
   <Home/> */}
   


  
      {/* <TodoAp/> */}
   <Routes>
   <Route  path='/' element={<Homee/>}/>
  <Route path="/Register" element={<SignupForm />} />
  <Route path='/notes'  element={<NotesList /> }/>
</Routes> 
    </div>
  )
}

export default App
