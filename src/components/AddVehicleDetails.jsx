import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';

const AddVehicleDetails = () => {

  let [model,setModel] =useState("");
  let [company,setCompany] =useState("");
  let [year,setYear] =useState("");
  let [registrationNo,setRegistrationNo] =useState("");

  let history=useHistory();

  let handleSubmit= (e) =>{
    e.preventDefault();

    let vehicle= {model,company,year,registrationNo};
    console.log(vehicle);

    fetch("http://localhost:9000/vehicle",{
                                            method:"POST",
                                            headers:{"Content-Type":"application/json"},
                                            body:JSON.stringify(vehicle),
        })
    .then(()=>{
        alert("Data added successfully")
        // history.push("/")
        window.location.reload();
    })
    .catch((er)=>{
          console.log(er.message);
          alert("Data not saved!!");
    })
  }

  return (
    <div>
      <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
               <h1 style={{textAlign:"center"}}>Add Vehicles</h1> 

                <form id='form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                      <label >Model</label>
                      <input type="text" className='form-control w-25'  value={model} onChange={(e)=>{setModel(e.target.value)}} />
                    </div>
                    <div className="form-group">
                      <label>Compapany</label>
                      <input type="text" className='form-control w-25' value={company} onChange={(e)=>{setCompany(e.target.value)}} />
                    </div>
                    <div className="form-group">
                      <label >Year</label>
                      <input type="text" className='form-control w-25' value={year} onChange={(e)=>{setYear(e.target.value)}} />
                    </div>
                    <div className="form-group">
                      <label >Registration No.</label>
                      <input type="text" className='form-control w-25' value={registrationNo} onChange={(e)=>{setRegistrationNo(e.target.value)}} />
                    </div> <br />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
          </div>
        </div>   
    </div>
  )
}

export default AddVehicleDetails
