import React, { useEffect, useState } from 'react'
import { PiPaperPlaneRightFill } from 'react-icons/pi'
import WhiteBlob from '../assets/white-circle.svg'
import axios from 'axios';
import Messages from './Messages';

export default function Chat() {

  const [messages, setMessages] = useState([]);
  async function handleSubmit(event){
    event.preventDefault();
    const prompt = event.target.elements.prompt.value;
    const user = {role:'user', content: prompt};
    setMessages(preValue => [...preValue, user])
    const req = {model:'phi3', messages:[...messages, user], stream:false} 
    try {
      const response = await axios.post('http://localhost:11434/api/chat', JSON.stringify(req))
      setMessages(preValue => [...preValue, response.data.message])
    } catch (error) {

    }
  }  
  
  useEffect(()=>{
    console.log(messages);
  },[messages])

  return (
    <div
      className={
        "flex flex-col justify-between items-center h-screen bg-gradient-to-t from-slate-300 via-slate-600 to-slate-900"
      }
    >
      {/* <img className="absolute w-full h-screen opacity-50" src={WhiteBlob} alt="" /> */}
      <h1 className="justify-start text-3xl font-light m-10">LLocal UI</h1>
      <div className='justify-center w-2/5 max-h-5/6 overflow-auto'>
        <Messages arr={messages} />
      </div>
      <div className="relative flex justify-center w-2/5 m-10">
        <form onSubmit={handleSubmit} className='w-full'>
          <button type='submit' className="text-2xl text-black absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 cursor-pointer hover:scale-105">
            <PiPaperPlaneRightFill className="" />
          </button>
          <input className="text-black shadow-2xl rounded-xl bg-slate-100 p-5 pr-10 outline-none w-full h-12" name='prompt' type="text" />
        </form>
      </div>
    </div>
  )
}
