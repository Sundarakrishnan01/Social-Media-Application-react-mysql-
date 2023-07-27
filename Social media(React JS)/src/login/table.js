
import React, { useState } from "react";
// import './login.css';


import axios from 'axios';
import { useEffect } from "react";

export default function Table(){
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:1991/show').then((response) => {
            setData(response.data);
        });
    },[]);
    return(
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>  
          {data.map((item) => (
            <tr>
            <td key={item.id}> {item.id} </td>
            <td key={item.id}> {item.name} </td>
            </tr>
          ))}
        </table>
      </div>
    );
}
