import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Admin = () => {
    // let {data:vehicle, pending, error} =usefetch("http://localhost:9000/vehicle")
    let [data,setData]= useState(null);

    useEffect(()=> {
        fetch("http://localhost:9000/vehicle")
        .then((response)=>{
            return response.json();
        })
        .then((fetchedData)=>{
            setData(fetchedData);
        })
    }, [])

    const handleDelete = (deleteId)=>{
        fetch(`http://localhost:9000/vehicle/${deleteId}` , {method:"DELETE"})
        .then(()=>{
            alert("Data deleted")
            window.location.reload();
        })
    }

  return (
    <div className='admin'>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col"> 
                {data &&
                <tbody> 
                    <table border="4px" cellspacing="10px" cellpadding="5px" style={{width: "750px"}}>
                    <tr>
                        <thead>
                            <th>Sl No.</th>
                            <th>Model</th>
                            <th>Company</th>
                            <th>Year</th>
                            <th>Registration No.</th>
                            <th colSpan="2">Action</th>
                        </thead>
                        {/* <tbody> */}
                            { data.map((vehicle)=>
                                (
                                    <tr key={vehicle.id}>
                                        <td>{vehicle.id}</td>
                                        <td>{vehicle.model}</td>
                                        <td>{vehicle.company}</td>
                                        <td>{vehicle.year}</td>
                                        <td>{vehicle.registrationNo}</td>
                                        <td> <Link to={`/UpdateVehicleDetails${vehicle.id}`}> <button>Edit</button> </Link> </td>
                                        <td> <button onClick={()=>{handleDelete(vehicle.id)}}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        {/* </tbody> */}
                    </tr>
                </table>
                </tbody>
                }
            </div>
          </div>
        </div>         
    </div>
  )
}

export default Admin
