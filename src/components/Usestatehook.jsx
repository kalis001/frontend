import React, { useState } from 'react'

export default function Usestatehook() {
    let [a,b]=useState('dgl')
    function change()
    {
        b('cbe')
    }
  return (
    <div>
        <h1>{a}</h1>
        <button onClick={change}>change</button>
    </div>
  )
}
