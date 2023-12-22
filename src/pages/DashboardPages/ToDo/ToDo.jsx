import { useDrop } from "react-dnd";
import useTask from "../../../hooks/useTask";
import SingleToDo from "./SingleToDo";

const ToDo = () => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop:(item)=>addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const [taskData, taskLoading, refetch] = useTask();
    console.log(taskData);
    const addItemToSection=(id)=>{
        console.log("dropped", id);
    }
    return (
        
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white text-lg text-center">
                            <th>TODO</th>
                            <th ref={drop}>On Going</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            taskLoading ? '' :
                                taskData.map((item, index) => <SingleToDo key={item._id} refetch={refetch} item={item} index={index}></SingleToDo>)

                        }
                    </tbody>
                </table>
            </div>
    );
};

export default ToDo;