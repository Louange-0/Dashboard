import React from 'react'
import {RiHomeLine} from 'react-icons/ri'
import {FaRegUser} from 'react-icons/fa'
import {MdEmojiObjects} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import {LuHistory} from 'react-icons/lu'
import {PiSignOutFill} from 'react-icons/pi'
import {BsFire} from 'react-icons/bs'
import{IoFootsteps} from 'react-icons/io5'
import {PiPathFill} from 'react-icons/pi'
import {GiNightSleep} from 'react-icons/gi'
import prof from './prof.jpeg'
import Graph from './Graph'
import {BsSearch} from 'react-icons/bs'




function App() {
  return (
    <div className="App">
      <div className='flex items-center justify-center p-4'> 
          <div className=' flex bg-gray-900 text-white w-3/4 h-screen rounded-3xl gap-6 '>
            <div className='p-14 w-1/4 h-screen rounded-tl-2xl rounded-bl-2xl border-gray-500 border-r-2'>
              <div className='grid gap-4'>
              <span className='flex gap-2 text-gray-500 bg-blue-200 p-2 rounded-lg cursor-pointer'><RiHomeLine size={20}/><span>Dashboard</span></span>
              <span className='flex gap-2 text-gray-500 cursor-pointer'><FaRegUser size={20}/><span>Profile</span></span>
              <span className='flex gap-2 text-gray-500 cursor-pointer'><MdEmojiObjects size={20}/><span>Exercise</span></span>
              <span className='flex gap-2 text-gray-500 cursor-pointer'><FiSettings size={20}/><span>Settings</span></span>
              <span className='flex gap-2 text-gray-500 cursor-pointer'><LuHistory size={20}/><span>History</span></span>
              <span className='flex gap-2 text-gray-500 cursor-pointer'><PiSignOutFill size={20}/><span>Signout</span></span>
              </div></div>
              <div className='w-2/4 relative'>
                <BsSearch className='absolute top-[70px] left-4' size={20}/>
                <input type='text' className='p-3 w-[620px] bg-gray-800 mt-14 rounded-lg px-12' placeholder='Search' /> 
                <div className='flex gap-2 mt-10'>
                  <div className='bg-gray-800 grid items-center justify-center p-4 aspect-square h-[150px] rounded-2xl'>
                    <BsFire className='text-orange-500 m-auto' size={30}/>
                    <b className='m-auto'>305</b>
                    <p className='m-auto'>Calories</p>
                  </div>
                  <div className='bg-gray-800 grid items-center justify-center p-4 aspect-square h-[150px] rounded-2xl'>
                    <IoFootsteps className='text-blue-200 m-auto' size={30}/>
                    <b className='m-auto'>10,983</b>
                    <p className='m-auto'>Steps</p>
                  </div>
                  <div className='bg-gray-800 grid items-center justify-center p-4 aspect-square h-[150px] rounded-2xl'>
                    <PiPathFill className='text-pink-400 m-auto' size={30}/>
                    <b className='m-auto'>7Km</b>
                    <p className='m-auto'>Distance</p>
                  </div>
                  <div className='bg-gray-800 grid items-center justify-center p-4 aspect-square h-[150px] rounded-2xl'>
                    <GiNightSleep className='text-blue-400 m-auto'size={30}/>
                    <b className='m-auto'>7h48m</b>
                    <p className='m-auto'>Sleep</p>
                  </div>
                  </div>
                  <div className='w-[630px] h-[230px] bg-gray-800 p-4 mt-8 rounded-2xl'></div> 
                  <div className='mt-10 flex gap-4'>
                 <Graph/>
                  </div>           
              </div>
              <div className='w-2/6 bg-gray-800  rounded-3xl grid'>
               <div className='flex-row h-2/6 items-center justify-center gap-4 rounded-tl-2xl rounded-tr-2xl' >  
              
                <img src={prof} alt='' className='rounded-full w-[100px] h-[110px] m-auto mt-28'/>
                <b><p className='text-center '>Summer</p></b>
                <p className='text-center'>Edit Health Details</p>
                <div className='bg-gray-600 w-3/4 rounded-lg p-8 h-8 m-12 flex gap-12 justify-center items-center'>
                  <spin>
                    <p className='text-gray-400'>Weight</p>
                    <b><p className='text-center'>53kg</p></b>
                  </spin>
                  <spin>
                    <p className='text-gray-400'>Height</p>
                    <b><p className='text-center'>162cm</p></b>
                  </spin>
                  <spin>
                    <p className='text-gray-400'>BloodType</p>
                    <b><p className='text-center'>O+</p></b>
                  </spin>
                </div>
                
                <div className=' h-full flex-row p-4  '>
                  <div className='bg-gray-900 p-4 rounded-2xl m-4 flex gap-36'><div><b>Hatha Yoga</b><p>Today, 9AM-10AM</p></div> <b>...</b></div>
                  <div className='bg-gray-900 p-4 rounded-2xl m-4 flex gap-32'><div><b>Body Combat</b><p>Tomorrow, 5PM-6PM</p></div> <b>...</b></div>
                  <div className='bg-gray-900 p-4 rounded-2xl m-4 flex gap-28'><div><b>Hatha Yoga</b><p>Wednesday, 9AM-10AM</p></div> <b>...</b></div>
                </div>
               </div>
             
               
              </div>
          </div>
       
      </div>
    </div>
  );
}

export default App;
