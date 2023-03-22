import React from 'react'
import { Link } from 'react-router-dom'
import AddVehicleDetails from './AddVehicleDetails'
import Admin from './Admin'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Vehicle Management System</h1>
      <div className='link'>
        <Link to="/"> AddVehicleDetails</Link>
        <Link to="/Admin">Admin </Link>
      </div>
    </div>
  )
}

export default Navbar
