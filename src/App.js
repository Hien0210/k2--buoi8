import logo from './logo.svg';
import './App.css';
import Index from './homework/Index';
import { RotatingLines } from 'react-loader-spinner';
import  { useState,useEffect } from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai'
function App() {
  const [data, setData] = useState(false)
  const [isloading, setIsloading] = useState(false)
  const [showscroll,setShowscroll] = useState(false)
  useEffect(() =>{
    const handlescroll = (e) =>{
      if (e.target.documentElement.scrollTop >0 )
      {setShowscroll(true)}
      else{setShowscroll(false)};
    }
    window.addEventListener('scroll', handlescroll)
    return () => window.removeEventListener('scroll', handlescroll)
  },[])
  const loadclick = () =>{
    setIsloading(true)
    setTimeout (() =>{
      
    setData(true)
    setIsloading(false)
    }, 2000)

  }
  const movedown =() =>{
   window.scrollTo(0,window.scrollY+100)
   
  
  }
  return (
    <div className="App">
     <span className='down' onClick={movedown} ><AiOutlineArrowDown fontSize={'32px'}/></span>
      { data ?
      <Index/>: null}
      <button onClick={loadclick} >Fetch Data</button>
      {isloading ? <RotatingLines width="100" />: null}
    

    </div>
  );
}

export default App;
