import React from 'react';
import Logo from '../../Assets/Logo/logo.png';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SideBar = (props) => {

  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleLogOut = async () => {
    // LogOut Logic 
    try {
      const response = await axios.post(
        `${apiUrl}/logout-user`,
        {},
        {
          withCredentials: true
        }
      );


      if (response.data.status === "success") {
        setTimeout(() => {
          toast.success("Logged Out Succesfully!");
        }, 2000);
        navigate('/')
        props.setAuth(false);
      }
      else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Internal Server Error!');
    }
  }

  return (
    <>
      <div className='flex flex-col justify-between h-screen'>
        {/* Logo */}
        <div className='flex flex-col items-center'>
          <Link to='/'>
            <img src={Logo} alt="Logo" className='w-24 h-24' />
          </Link>

          {/* Menu*/}
          <div className='flex flex-col mt-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
          </div>
        </div>

        {/* Logout button*/}
        <div className='my-10 mx-3'>
          <button className='flex flex-row' onClick={handleLogOut}>
            Log Out <FiLogOut className='mx-3 mt-1' />
          </button>
        </div>
      </div>
    </>

  )
}

export default SideBar;
