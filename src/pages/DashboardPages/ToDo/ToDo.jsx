import useTask from "../../../hooks/useTask";
import SingleToDo from "./SingleToDo";

const ToDo = () => {
    const [taskData, taskLoading, refetch] = useTask();
    console.log(taskData);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-white text-lg text-center">
                        <th>TODO</th>
                        <th>On Going</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskLoading? '':
                            taskData.map((item, index)=> <SingleToDo key={item._id} refetch={refetch} item={item} index={index}></SingleToDo>)
                        
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ToDo;