'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { count } from 'console';
import { useState } from 'react';
import { data } from './models/data';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-center'>
    {/* <UseState/> */}
    {/* <DisplayList/> */}
{/* 
    <UseStateObject/> */}
    <UseStateGotcha/>

    </div>
  )
  
}

function UseState() {
  const [count, setCounter] = useState(0);

 
  const handleClick = ()=>{
    setCounter(count+1)
  }
  
  return (
   <>
   <div className='w-full text-center'>
   <h2 className='text-xl font-bold p-5 ml-5'>You Clicked {count} Times</h2>
   <button className='bg-blue-400 text-white p-2 m-2' onClick={ handleClick}>Click me</button>

   </div>
      </>
  )
}


function DisplayList() {

  const [peoples, setPeople]= useState(data)

  const removeItem =(id:number)=> {

    //console.log(id);
    setPeople(peoples.filter(p=>p.id !== id));
    console.log('record deleted')
  }
  return(
    <div className='w-full text-center'>
      <ul className=''>
      {
        peoples.map(p=>(
          <li key={p.id}>{p.first_name} <br></br>
          <button type='button' onClick={()=>{removeItem(p.id)}} className='p-2 bg-blue-400 rounded-md text-white'>Remove</button>
          </li>  
        ))

      }
      </ul>
      <button type='button' onClick={()=>{setPeople([])}} className='p-2 bg-red-400 mt-10 rounded-md text-white'>Clear All</button>
      
      </div>

  )

}

function UseStateObject() {
  const [person, setPerson] = useState(data[0]);
  return(
<div className='mt-10'>
<h1 className='text-xl font-bold'>UseState Object</h1>
    <h2 className='text-lg font-bold mt-5'>First Name:{person.first_name}</h2>
    <h2 className='text-lg font-bold'>Email: {person.email}</h2>
    <h2 className='text-lg font-bold text-red-600'>IP: {person.ip_address}</h2>

    <button className="bg-purple-600 text-white p-2 mt-2 font-bold" onClick={()=>setPerson(data[2])}>Show {data[2].first_name}</button>

</div>
  )
}


function UseStateGotcha() {
  const [count, setCount] = useState(0)

  const handleCount = ()=>{
    setCount(count+1);
  
    console.log(count);
  }

  return(
    <>
    <h2  className='text-lg font-bold mt-5'>Value of Count is: {count}</h2>
    <button className="bg-purple-600 text-white p-2 mt-2 font-bold"  onClick={handleCount}>Gotcha</button>
    </>
  )
}