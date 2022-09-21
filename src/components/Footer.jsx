/* react icon */
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 grid gap-8 text-white md:grid-cols-3 md:px-12">
        <div className="flex flex-col gap-4">
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">DATA.B</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi adipisci, in earum soluta et quis odio ipsum inventore vel nesciunt.</p>
          <div className='flex gap-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="flex justify-between md:col-span-2">
          <div className="flex flex-col">
            <h2 className='font-medium text-gray-400'>Solutions</h2>
            <ul>
              <p className='py-2 text-sm'>Analytics</p>
              <p className='py-2 text-sm'>Marketing</p>
              <p className='py-2 text-sm'>Commerce</p>
              <p className='py-2 text-sm'>Insights</p>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className='font-medium text-gray-400'>Support</h2>
            <ul>
              <p className='py-2 text-sm'>Pricing</p>
              <p className='py-2 text-sm'>Documentation</p>
              <p className='py-2 text-sm'>Guides</p>
              <p className='py-2 text-sm'>API Status</p>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className='font-medium text-gray-400'>Company</h2>
            <ul>
              <p className='py-2 text-sm'>About</p>
              <p className='py-2 text-sm'>Blog</p>
              <p className='py-2 text-sm'>Jobs</p>
              <p className='py-2 text-sm'>Press</p>
              <p className='py-2 text-sm'>Careers</p>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className='font-medium text-gray-400'>Legal</h2>
            <ul>
              <p className='py-2 text-sm'>Claim</p>
              <p className='py-2 text-sm'>Policy</p>
              <p className='py-2 text-sm'>Terms</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer