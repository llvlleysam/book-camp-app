import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-around items-center bg-white drop-shadow-lg p-2 z-10">
        <p className="text-3xl font-bold">Maktab Sharif</p>
      <nav className="list-none flex gap-8 ">
        <NavLink to={"/"} className={({isActive})=>isActive?"text-orange-500 border-2 border-orange-500 px-2 rounded-lg animate-bounce cursor-pointer font-bold":"cursor-pointer font-bold"}>Home</NavLink>
        <NavLink to={"/aboutus"} className={({isActive})=>isActive?"text-orange-500 border-2 border-orange-500 px-2 rounded-lg animate-bounce cursor-pointer font-bold":"cursor-pointer font-bold"}>About Us</NavLink>
        <NavLink to={"/Contactus"} className={({isActive})=>isActive?"text-orange-500 border-2 border-orange-500 px-2 rounded-lg animate-bounce cursor-pointer font-bold":"cursor-pointer font-bold"}>Contact Us</NavLink>
        <NavLink to={"/bootcamps"} className={({isActive})=>isActive?"text-orange-500 border-2 border-orange-500 px-2 rounded-lg animate-bounce cursor-pointer font-bold":"cursor-pointer font-bold"}>Boot Camps</NavLink>
      </nav>
        <img className="w-20" src="./maktabsharif_logo.jpg" alt="" />
    </div>
  )
}
