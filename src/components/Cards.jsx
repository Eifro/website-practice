import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className='container mx-auto grid gap-8 px-6 md:grid-cols-3'>
        <div className='w-full shadow-xl flex flex-col items-center p-4 my-8 rounded-xl duration-500 hover:scale-105'>
          <img src={Single} alt="Single" className='w-20 mx-auto bg-white' />
          <h2 className='text-2xl font-bold py-6'>Single User</h2>
          <p className='text-3xl font-bold'>$149</p>
          <div className='py-4 font-medium flex flex-col'>
            <p className='border-b py-2'>500 GB Storage</p>
            <p className='border-b py-2'>1 Granted Users</p>
            <p className='border-b py-2'>Sent up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] mx-auto rounded py-2 my-2 font-medium text-[#000300]'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col items-center p-4 my-8 md:my-0 rounded-xl duration-500 hover:scale-105 '>
          <img src={Double} alt="Double" className='w-20 mx-auto bg-white' />
          <h2 className='text-2xl font-bold py-6'>Paternship</h2>
          <p className='text-3xl font-bold'>$149</p>
          <div className='py-4 font-medium flex flex-col'>
            <p className='border-b py-2'>500 GB Storage</p>
            <p className='border-b py-2'>1 Granted Users</p>
            <p className='border-b py-2'>Sent up to 2 GB</p>
          </div>
          <button className='text-[#00df9a] w-[200px] mx-auto rounded py-2 my-2 font-medium bg-[#000300]'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col items-center p-4 my-8 rounded-xl duration-500 hover:scale-105'>
          <img src={Triple} alt="Triple" className='w-20 mx-auto bg-white' />
          <h2 className='text-2xl font-bold py-6'>Group Account</h2>
          <p className='text-3xl font-bold'>$149</p>
          <div className='py-4 font-medium flex flex-col'>
            <p className='border-b py-2'>500 GB Storage</p>
            <p className='border-b py-2'>1 Granted Users</p>
            <p className='border-b py-2'>Sent up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] mx-auto rounded py-2 my-2 font-medium text-[#000300]'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards