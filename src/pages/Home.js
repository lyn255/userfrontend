import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [client,setClient]=useState([]);

    const {id}=useParams()

    useEffect(()=>{//will tell the react that your component needs to do something after the render
        loadClient();
    },[]);//[] empty array will run once only when the page loads

    const loadClient=async()=>{
        const result=await axios.get("http://localhost:8080/clients")
        setClient (result.data);
    };

    const deleteClient=async(id)=>{
        await axios.delete(`http://localhost:8080/client/${id}`)
        loadClient()
    }

  return (
    <div className='container'>
        <div className="py-4">
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        //this map will dois creates a new array from calling a function for every array element
                        client.map((client, index)=>(
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{client.fullName}</td>
                                <td>{client.address}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/viewclient/${client.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/editclient/${client.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2" onClick={()=>deleteClient(client.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </div>
    </div>
  )
}
