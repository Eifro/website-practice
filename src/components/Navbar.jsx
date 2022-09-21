import { useState } from 'react'

/* react icons */
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  /* states */
	const [open, setOpen] = useState(false)

  const links = [
    { name: "HOME", link: "#" },
    { name: "COMPANY", link: "#" },
    { name: "RESOURCES", link: "#" },
    { name: "ABOUT", link: "#" },
    { name: "CONTACT", link: "#" },
  ];

  return (
    <div className="flex justify-between items-center h-24 container mx-auto text-white px-4 md:px-0">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">DATA.B</h1>
      <ul className={`fixed top-0 left-0 mt-20 w-[60%] h-full bg-[#000300] ${!open ? "hidden" : ""}  md:flex md:static md:h-max md:mt-0`}>
        {links.map((link) => (
          <li key={link.name} className="p-4 border-b border-gray-600 md:border-none">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div onClick={() => setOpen(!open)} className="cursor-pointer md:hidden">
        {open ? <AiOutlineClose size="20" /> : <AiOutlineMenu size="20" />}
      </div>
    </div>
  );
};

export default Navbar;
