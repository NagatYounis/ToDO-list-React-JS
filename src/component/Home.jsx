import React from 'react'

const Home = () => {
  return (
    <div className='w-full  bg-gray-200 flex justify-center items-center gap-10 flex-wrap md:flex-nowrap' style={{height:"89vh"}}>
      
    <div className='transition-transform transition-background hover:bg-amber-700 duration-300 delay-100 hover:scale-110 ease-in-out card border-none rounded-md text-center bg-pink-300 w-60 h-50 rounded-b-md border-2 p-3'>
        <h1 className='text-gray-900 font-bold w-full bg-green-300'>first card</h1>
        <p className='text-white p-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas adipisci alias doloremque?</p>
    </div>
    <div className='transition-transform transition-background hover:bg-amber-700 duration-300 delay-100 hover:scale-110 ease-in-out card border-none rounded-md text-center bg-pink-300 w-60 h-50 rounded-b-md border-2 p-3'>
        <h1 className='text-gray-900 font-bold bg-green-200'>first card</h1>
        <p className='text-white p-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas adipisci alias doloremque?</p>
    </div>
    <div className=' transition-transform transition-background hover:bg-amber-700 duration-300 delay-100 hover:scale-110 ease-in-out card border-none rounded-md text-center bg-pink-300 w-60 h-50 rounded-b-md border-2 p-3'>
        <h1 className='text-gray-900 font-bold bg-green-100'>first card</h1>
        <p className='text-white p-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas adipisci alias doloremque?</p>
    </div>
    <div className='transition-transform transition-background hover:bg-amber-700 duration-300 delay-100 hover:scale-110 ease-in-out
 card border-none rounded-md text-center bg-pink-300 w-60 h-50 rounded-b-md border-2 p-3'>
        <h1 className='text-gray-900 font-bold bg-green-50 '>first card</h1>
        <p className='text-white p-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas adipisci alias doloremque?</p>
    </div>

    </div>
  )
}

export default Home
