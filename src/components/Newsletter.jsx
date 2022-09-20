const Newsletter = () => {
  return (
    <div className="w-full py-14 text-white bg-black">
      <div className="container mx-auto grid gap-4 md:gap-0 md:grid-cols-3 px-4">
        <div className="flex flex-col justify-center lg:col-span-2">
          <h1 className="text-2xl font-bold md:text-4xl sm:text-3xl">Want tips & tricks to optimize your flow?</h1>
          <p>Sing up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="flex flex-col items-center justify-between w-full sm:flex-row sm:gap-2">
            <input type="email" placeholder="Enter your email" className="p-3 rounded-md text-black w-full" />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-[#000300]">Send</button>
          </div>
          <p className="-mt-2">We care about the protetion of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
