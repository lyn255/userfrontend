import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddClient() {

    let navigate=useNavigate()

    const[client,setClient]=useState({
        fullName:"",
        address:""
    })

    const{fullName,address}=client

    const onInputChange=(e)=>{
        setClient({...client,[e.target.name]:e.target.value})//keep on adding the new update
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/client", client)
        navigate("/")
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add New Client</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
                <input 
                type={"text"}
                className="form-control"
                placeholder="Enter your Full Name"
                name="fullName"
                value={fullName}
                onChange={(e)=>onInputChange(e)}
                />
            </div>

            <div className="mb-3">
                <input 
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
        </form>
        </div>
      </div>
    </div>
  )
}
