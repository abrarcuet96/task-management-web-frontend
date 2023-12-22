import useUser from "../../../hooks/useUser";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
    const [userData, loading] = useUser();
    console.log(userData);
    return (
        <div>
            <Helmet>
                <title>InvigoNex | Manager Home</title>
            </Helmet>
            {
                loading ? '' : <>
                    <div className="flex flex-col justify-center items-center min-h-[80vh]">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-[200px] mb-2 rounded-full" src={userData[0].imageURL} alt="" />
                            <h2 className="text-7xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">{userData[0].name}</h2>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default UserHome;