import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {

    const navLinks =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>About</Link></li>
            <li><Link to={'/'}>Services</Link></li>
            <li><Link to={'/'}>Team</Link></li>
            <li><Link to={'/'}>Contact</Link></li>
        </>
        ;
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="flex items-center gap-2"> 
                    <img className="w-12 md:w-16" src="https://i.ibb.co/GtQ9TJJ/reed-logo.png" alt="" />
                    <h2 className=" text-sm md:text-lg first-letter:text-xl first-letter:md:text-3xl first-letter:text-yellow-500">Reed <br /> Consultancy</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn"><FaSearch /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;