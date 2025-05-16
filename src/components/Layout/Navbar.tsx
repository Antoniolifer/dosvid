import { useState } from "react"
import AboutModal from "../Modal/AboutModal";
import { GiLindenLeaf } from "react-icons/gi";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-fern w-full text-white text-md md:text-xl flex justify-between md:justify-between items-center px-2 md:px-20 py-2">
        <p className="border-4 border-white border-double rounded-4xl p-2"><GiLindenLeaf className="text-4xl text-white "/></p>
        <h1 className="ml-1 md:ml-4 font-bold italic text-3xl md:text-4xl underline underline-offset-3">Dosvid</h1>
        <button onClick={() => setIsOpen(true)} className="border-forest border-3 hover:bg-forest transition-all duration-300 px-2 md:px-4 py-2 rounded-xl cursor-pointer">about</button>
        <AboutModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}

export default Navbar