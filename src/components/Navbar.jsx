import { NavLink } from "react-router-dom"
import home from "../assets/icons/home.png"

const Navbar = () => {
    return (
        //header: it knows that this is a header element
        <header className="w-full fixed top-0 left-0 z-50 flex items-center lg:px-20 sm:py-4 py-2 bg-transparent justify-between">  
        <NavLink to="/" className="w-10 h-10 rounded-lg  items-center justify-center flex font-bold shadow-md">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                <img
                    src={home}
                    className="h-5 w-5">
                </img>
            </p>
        </NavLink>
            <nav className="flex text-lg gap-7 font-medium float-right">
            <NavLink to="/about" className = {({ isActive }) => isActive ? "text-amber-400" : "text-amber-500"}>
                About
            </NavLink>
            <NavLink to="/projects" className = {({ isActive }) => isActive ? "text-amber-400" : "text-amber-500"}>
                Projects
            </NavLink>
            <NavLink to="/contact" className = {({ isActive }) => isActive ? "text-amber-400" : "text-amber-500"}>
                Contacts
            </NavLink>
            </nav>
        </header>
    )
}

export default Navbar