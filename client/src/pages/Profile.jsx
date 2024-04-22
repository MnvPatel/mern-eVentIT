import { current } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'
import { signOutUserFailure, signOutUserStart, signOutUserSuccess } from '../redux/user/userSlice.js';
import { useRef, useState, useEffect } from 'react';

export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailure(data.message));
    }
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover self-center mt-2' />
        <input type='text' placeholder='Username' defaultValue={currentUser.username} id='username' className='border p-3 rounded-lg'></input>
        <input type='email' placeholder='Email' defaultValue={currentUser.email} id='email' className='border p-3 rounded-lg'></input>
        <input type='text' placeholder='Registration Number' defaultValue={currentUser.RegistrationNumber} id='RegistrationNumber' className='border p-3 rounded-lg'></input>
        <input type='text' placeholder='Gender' id='gender' defaultValue={currentUser.gender} className='border p-3 rounded-lg'></input>
        <input type='date' placeholder='Date of Birth' defaultValue={currentUser.DOB} id='DOB' className='border p-3 rounded-lg'></input>
        <button onClick={handleSignOut} className='bg-slate-700 text-white rounded-lg p-4 uppercase hover:opacity-95 disabled:opacity-80'>
          Sign Out
        </button>
      </form>
    </div>
  )
}
