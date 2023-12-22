import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SectionContainer from "../SectionContainer/SectionContainer";
import Button from "../Button/Button";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks =
        <>
            <li className="text-lg font-semibold">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text" : "text-slate-600"
                    }
                >
                    Home
                </NavLink>
            </li>
            {
                user ?
                    <li className="text-lg font-semibold">
                        <NavLink
                            to="/dashboard/userHome"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text" : "text-slate-600"
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    : <li className="text-lg font-semibold">
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text" : "text-slate-600"
                            }
                        >
                            Register
                        </NavLink>
                    </li>

            }
        </>
    return (
        <SectionContainer>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-t from-gray-700 via-gray-900 to-black rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <img className="w-[30px] max-lg:hidden" src="logo.png" alt="" />
                        </div>
                        <div>
                            <h2 className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">TaskTamer</h2>
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="flex flex-row">
                                    <div className=" max-sm:hidden">
                                        <span className="m-2 text-sm font-semibold lg:text-lg bg-gradient-to-r from-green-300  to-purple-600 text-transparent bg-clip-text">{user?.displayName}</span>

                                    </div>
                                    <img className="w-8 h-8 mr-2 rounded-full" src={user?.photoURL} alt="" />

                                    <button onClick={handleLogOut}>
                                        <Link className="text-sm font-semibold lg:text-lg bg-gradient-to-r from-green-300  to-purple-600 text-transparent bg-clip-text" to="/">LogOut</Link>
                                    </button>

                                </div>
                            </> :
                            <Link to="/login">
                                <Button buttonName="Login"></Button>
                            </Link>
                    }

                </div>
            </div>
        </SectionContainer>
    );
};

export default NavBar;