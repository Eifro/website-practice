/* react typed */
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="text-white w-full h-screen mt-[-96px] flex flex-col text-center justify-center">
      <p className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</p>
      <h1 className="text-4xl font-bold py-2 sm:text-6xl md:text-7xl md:py-6">Grow with data.</h1>
      <div className='flex justify-center items-center gap-2'>
        <p className="text-xl font-bold sm:text-3xl md:text-4xl">Fast, flexible financing for </p>
        <Typed strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop className='text-xl font-bold sm:text-3xl md:text-4xl text-gray-500' />
      </div>
      <button className='bg-[#00df9a] w-[200px] rounded mx-auto my-6 py-2 font-bold text-[#000300]'>Get Started</button>
		</div>
  )
}

export default Hero