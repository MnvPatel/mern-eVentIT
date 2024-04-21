import { useSelector } from 'react-redux'

export default function ProfileTeacher() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover self-center mt-2' />
        <input type='text' placeholder='Username' defaultValue={currentUser.username} id='username' className='border p-3 rounded-lg'></input>
        <input type='email' placeholder='Email' defaultValue={currentUser.email} id='email' className='border p-3 rounded-lg'></input>
        <input type='text' placeholder='Registration Number' defaultValue={currentUser.RegistrationNumber} id='RegistrationNumber' className='border p-3 rounded-lg'></input>
        <input type='text' placeholder='Gender' defaultValue={currentUser.gender} id='gender' className='border p-3 rounded-lg'></input>
        <input type='date' placeholder='Date of Birth' defaultValue={currentUser.DOB} id='DOB' className='border p-3 rounded-lg'></input>
        <input type='password' placeholder='Password' defaultValue={currentUser.password} id='password' className='border p-3 rounded-lg'></input>
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
