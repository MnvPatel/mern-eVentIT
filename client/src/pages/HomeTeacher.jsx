import { Link } from 'react-router-dom'

export default function HomeTeacher() {
  return (
    <div className='p-6 max-w-lg mx-auto'>
      <Link className='bg-green-700 text-white  p-3 rounded-lg uppercase text-center hover:opacity-95' to={"/create-listing"}>
        Create Listing
      </Link>
    </div>
  )
}
