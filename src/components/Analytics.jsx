import Laptop from '../assets/laptop.jpg'

const Analtytics = () => {
  return (
    <div className="bg-white w-full py-14 px-4">
      <div className="container mx-auto grid gap-4 md:grid-cols-2">
        <img src={Laptop} alt="Laptop" className='mx-auto w-[500px]' />
        <div className='flex flex-col justify-center gap-2'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates quasi a quibusdam nobis animi unde architecto molestiae tempora, magnam dignissimos impedit? Porro, aut. Officia, harum quibusdam. Mollitia, nobis delectus!</p>
          <button className='text-[#00df9a] w-[200px] mx-auto rounded py-2 my-4 font-bold bg-[#000300] md:mx-0'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analtytics;
