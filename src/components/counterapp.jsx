import React, { useState } from 'react'

export default function Counterapp() {
    let [num,setnum]=useState(0)
    function add()
    {
        setnum(num+1)
    }
    function sub()
    {
        setnum(num-1)
    }
    function reset()
    {
        setnum(0)
    }

  return (
    <div>
        {num
        }
    <button onClick={add}>add</button>
<button onClick={sub}>sub</button>
<button onClick={reset}>reset</button>
</div>
  )
}
