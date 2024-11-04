import React, { useState } from 'react'

export default function Usestateform() {
    let [text,settext]=useState('hai')
    let [view,setview]=useState('')
    function add()
    {
        setview(text)
        settext("")
    }
  return (
    <div>
        <h1>forms</h1>
        <input type='text' placeholder='ur name' value={text} onChange={(e)=>
        {
            settext(e.target.value)
        }}></input>
        <button onClick={add}>add</button>
        <h1>{text}</h1>
        <h2>{view}</h2>
        
    </div>
  )
}
