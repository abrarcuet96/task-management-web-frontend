import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit3 } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";

const SingleToDo = ({ item, index, refetch }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: item._id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    console.log(isDragging);
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove"
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    title: "Task is removed",
                    text: "Task removed successfully",
                    icon: "success"
                });
                axiosSecure.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                        }
                    })
            }
        })
    }
    return (
        
            <tr>
                <td ref={drag} className={`text-white text-sm ${isDragging? "opacity-25": "opacity-100" }`}>
                    <div className="card w-96 bg-[#282828] shadow-xl">
                        <div className="card-body">
                            <p><span className="font-semibold">Task No:</span> {index + 1}</p>
                            <p><span className="font-semibold">Task Name:</span> {item.taskName}</p>
                            <p><span className="font-semibold">Task Description:</span> {item.taskDescription}</p>
                            <p><span className="font-semibold">Task Description:</span> {item.taskDeadline}</p>
                            <p><span className="font-semibold">Task Description:</span> {item.taskPriority}</p>
                            <div className="flex gap-4 justify-end">
                                <div className="card-actions justify-end">
                                    <Link to={`/dashboard/taskEdit/${item.userEmail}/${item._id}`}>
                                        <button><FiEdit3 className="text-xl text-blue-700" /></button>
                                    </Link>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelete(item._id)}><TiDeleteOutline className="text-xl text-red-700" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
    );
};

export default SingleToDo;