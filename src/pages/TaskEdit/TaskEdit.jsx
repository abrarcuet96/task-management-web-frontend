import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import useUser from "../../hooks/useUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const TaskEdit = () => {
    const taskData = useLoaderData();
    const { _id, taskName, taskDescription, taskDeadline, taskPriority } = taskData;
    const { register, handleSubmit, reset } = useForm();
    const [userData, loading] = useUser();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data);
        const taskDetails = {
            taskName: data.taskName,
            taskDescription: data.taskDescription,
            taskDeadline: data.taskDeadline,
            taskPriority: data.taskPriority,
            userEmail: userData[0].email,
            taskStatus: "todo"
        }
        const upTask = await axiosSecure.patch(`/tasks/${_id}`, taskDetails);
        if (upTask.data.modifiedCount > 0){
            reset();
            Swal.fire({
                icon: "success",
                title: `Congratulations! Your product is up to date`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/toDo');
        }
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-[80vh]">
            <Helmet>
                <title>TaskTame | Add Product</title>
            </Helmet>
            {
                loading ? '' :
                    <>
                        <h1 className="text-3xl text-center my-4 font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">Update Task Here!!</h1>
                        <div className="px-2 rounded-md bg-[#303030] m-2 w-1/2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* task name */}
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-base-300">Task Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={taskName}
                                        placeholder="write your task name here"
                                        {...register("taskName", { required: true })}
                                        className="input bg-[#282828] text-white input-bordered w-full" />
                                </div>
                                {/* task description */}
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-base-300">Task Description</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        defaultValue={taskDescription}
                                        placeholder="write your task description here"
                                        {...register("taskDescription", { required: true })}
                                        className="input bg-[#282828] text-white input-bordered w-full">
                                    </textarea>
                                </div>
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-base-300">Task Deadline</span>
                                    </label>
                                    <input
                                        type="datetime-local"
                                        defaultValue={taskDeadline}
                                        placeholder="write your task deadline (date and time) here"
                                        {...register("taskDeadline", { required: true })}
                                        className="input bg-[#282828] text-white input-bordered w-full">
                                    </input>
                                </div>
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold text-base-300">Task Priority</span>
                                    </label>
                                    <select
                                        defaultValue={taskPriority}
                                        className="input bg-[#282828] text-white input-bordered w-full"
                                        {...register("taskPriority")}>
                                        <option value="Low">Low</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="High">High</option>
                                    </select>

                                </div>
                                <div className="flex justify-center my-2">
                                    <Button buttonName="Update Task"></Button>
                                </div>
                            </form>
                        </div>
                    </>
            }
        </div>
    );
};

export default TaskEdit;