import useTask from "../../../hooks/useTask";
import useUser from "../../../hooks/useUser";

const ToDo = () => {
    const [taskData, taskLoading]= useTask();
    console.log(taskData);
    return (
        <div>
           <h1>To Do</h1> 
        </div>
    );
};

export default ToDo;