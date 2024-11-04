import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Ha() {
  let [name, setname] = useState("");
  let [mail, setmail] = useState("");

  const navi = useNavigate();
  
  function HandleAddData(e){
    e.preventDefault();

    axios.post('https://64e6eb17b0fd9648b78f0ce6.mockapi.io/task2',{
      Name:name,
      Email:mail
    })
    .then(alert('Data Added'))
    .catch(error => console.log(error));

    setmail("");
    setname("");
  }


  const [views,setViews] = useState([]);

  useEffect(()=>{
      axios.get('https://64e6eb17b0fd9648b78f0ce6.mockapi.io/task2')
      .then((res)=>{
        setViews(res.data)
      })
      .catch(error => console.log(error));
  },[])

  return (
    <div>
      <form onSubmit={HandleAddData}>
        <input type='text' placeholder='ur name' value={name}
          onChange={(e) => setname(e.target.value)}></input>
        <input type='mail' placeholder='mail' value={mail}
          onChange={(e) => setmail(e.target.value)}></input>
        <input type='submit' />
      </form>
      <table className='table'>
        <thead>
          <tr>
            <th>name</th>
            <th>mail</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            views.map((items,index)=>{
              return(
                <tr key={index}>
                  <td>{items.Name}</td>
                  <td>{items.Email}</td>
                  <td>
                    <button
                      onClick={()=>{
                        navi('/edit/'+items.id)
                      }}
                    >Edit</button>
                    <button
                      onClick={()=>{
                        axios.delete('https://64e6eb17b0fd9648b78f0ce6.mockapi.io/task2/'+items.id)
                        .then(alert('Data Deleted'))
                        .catch(error => console.log(error));
                        
                      }}
                    >Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
