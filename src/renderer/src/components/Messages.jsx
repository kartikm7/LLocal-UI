import React from "react";

export default function Messages(props){
  return <div>
    {props.arr.map((val, index)=>{
      return <div className="w-full flex flex-col justify-start text-md">
        {val.role == 'user' && (val.content && <p className="p-5" key={index}>{val.content}</p>) }
        {val.role == 'assistant' && (val.content && <p className="bg-slate-200 rounded-2xl p-5 text-black" key={index}>{val.content}</p>) }
      </div>
    })}
  </div>
}