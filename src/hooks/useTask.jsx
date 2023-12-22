import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useTask = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    console.log(user?.email);
    const { data: taskData = {}, isPending: taskLoading, refetch } = useQuery({
        queryKey: ['taskData', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks/${user.email}`);
            return res.data;
        }
    })
    return [taskData, taskLoading, refetch];
};

export default useTask;