import React from 'react'
import  { useState,useEffect } from 'react';

const Index = () => {
  useEffect(() => {fetchData() },[])
  const [data,setData] = useState('')
  const fetchData = async () =>{
    try{
      const dataR = await fetch("https://jsonplaceholder.typicode.com/todos")
      const dataRes = await dataR.json()
      setData(dataRes);      
    } catch (err) {
      console.log("err", err.message);
    }
  }
  return (
    <div>
        <div className='datalist'>
        {data.map((d,index) =>(
               
                    
            <p key={index}>title: {d.title}</p>
            
          
        ))}
        </div>
    </div>
  )
}

export default Index