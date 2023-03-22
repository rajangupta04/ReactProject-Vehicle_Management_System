import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Navbar from './Navbar';

const UpdateVehicleDetails = () => {

    let {id} =useParams();

    let history =useHistory();

    let[model,setModel] = useState("");
    let[company,setCompany] = useState("");
    let[year,setYear] = useState("");
    let[registrationNo,setRegistrationNo] = useState("");

    useEffect(()=>{
      fetch("http://localhost:9000/vehicle/" + id)
      .then((response)=>{ return response.json()})
      .then((exData)=>{setModel(exData.model);
                        setCompany(exData.company);
                        setYear(exData.year);
                        setRegistrationNo(exData.registrationNo);
                      })
    }, [])

    let handleUpdate = (e) => {
      e.preventDefault();

      let updateVehicleDAta = {model,company,year,registrationNo}

      fetch("http://localhost:9000/vehicle/" + id,
              {method: "PUT",
               headers:{"ACCEPT":"application/json", "Content-Type" : "application/json"},
               body:JSON.stringify(updateVehicleDAta)
              }
            )
       .then(()=>{
        alert("Data Updated Successfully")
        history.push("/Admin")
       })     
    
    }

  return (
    <div>
      <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1></h1>
            </div>
            <form  onSubmit={handleUpdate}>
                <div className="form-group">
                    <label >Model</label>
                    <input type="text" className='form-control w-25'  value={model} onChange={(e)=>{setModel(e.target.value)}} />
                </div>
                
                <div className="form-group">
                    <label >Company</label>
                    <input type="text" className='form-control w-25'  value={company} onChange={(e)=>{setCompany(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label >Year</label>
                    <input type="text" className='form-control w-25' value={year} onChange={(e)=>{setYear(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label >Registration No.</label>
                    <input type="text" className='form-control w-25' value={registrationNo} onChange={(e)=>{setRegistrationNo(e.target.value)}} />
                </div>
                <br />
                {/* <button type='submit' className='btn btn-light' value={update}>Update</button> */}
                <input type="submit" value="update" />
          </form>
          </div>
        </div>
    </div>
  )
}

export default UpdateVehicleDetails


