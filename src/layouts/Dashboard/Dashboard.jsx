import { NavLink, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const borderStyle = {
        borderWidth: "0 3px 0 0",
        borderImage: "linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
        borderImageSlice: "1"
    }
    const [userData, loading] = useUser();
    console.log(userData);
    const { logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="drawer lg:drawer-open bg-[#202020]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>


                    {/* Sidebar content here */}
                    {
                        loading ? <progress className="progress w-56"></progress> :
                            <ul className="menu p-4 w-80 min-h-full bg-[#181818] text-base-content flex justify-between" style={borderStyle}>
                                <div>
                                    <>
                                        <div className="p-4">
                                            <div className="flex gap-2 items-center">
                                                <img className="w-[50px] rounded-full" src={userData[0]?.imageURL} alt="" />
                                                <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">{userData[0]?.name}</h2>
                                            </div>
                                        </div>
                                    </>

                                    <>
                                        <li className="text-lg font-semibold">
                                            <NavLink
                                                to="/dashboard/userHome"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? " bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text" : "text-slate-600"
                                                }
                                            >
                                                User Home
                                            </NavLink>
                                        </li>
                                        <li className="text-lg font-semibold">
                                            <NavLink
                                                to="/dashboard/addTask"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? " bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text" : "text-slate-600"
                                                }
                                            >
                                                Add Task
                                            </NavLink>
                                        </li>
                                        <li className="text-lg font-semibold">
                                            <NavLink
                                                to="/dashboard/toDo"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? " bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text" : "text-slate-600"
                                                }
                                            >
                                                To Do List
                                            </NavLink>
                                        </li>
                                    </>

                                </div>
                                <div>
                                    <li className="text-lg font-bold">
                                        <NavLink
                                                to="/"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? " bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text" : "text-slate-600"
                                                }
                                            >
                                                Home
                                            </NavLink>
                                    </li>
                                    <li className="text-lg font-bold">
                                        <NavLink
                                                to="/"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? " bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text" : "text-slate-600"
                                                }
                                            >
                                                <button onClick={handleLogOut}>Log Out</button>
                                            </NavLink>
                                    </li>
                                </div>
                            </ul>
                    }






                </div>
            </div>
        </div>
    );
};

export default Dashboard;