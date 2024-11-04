import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    let [name, setname] = useState("");
  let [mail, setmail] = useState("");

  const navi = useNavigate();

  const {id} = useParams();

  useEffect(()=>{
        axios.get('https://64e6eb17b0fd9648b78f0ce6.mockapi.io/task2/'+id)
        .then((res)=>{
            setname(res.data.Name)
            setmail(res.data.Email)
        })
  },[])
  
  function HandleUpdateData(e){
    e.preventDefault();

    axios.put('https://64e6eb17b0fd9648b78f0ce6.mockapi.io/task2/'+id,{
      Name:name,
      Email:mail
    })
    .then(alert('Data Edited'))
    .catch(error => console.log(error));

    setmail("");
    setname("");

    navi('/')
  }
  return (
    <div>
        <form onSubmit={HandleUpdateData}>
        <input type='text' placeholder='ur name' value={name}
          onChange={(e) => setname(e.target.value)}></input>
        <input type='mail' placeholder='mail' value={mail}
          onChange={(e) => setmail(e.target.value)}></input>
        <input type='submit' />
      </form>
    </div>
  )
}
