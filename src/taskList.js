import React from 'react';
import TaskItem from './taskItem';

const TaskList = (props) =>{
  console.log("taskList props.items", props.items);
  const taskItems = props.items.map((item) =>{
    return(
      <TaskItem item={item}/>
    );
  });


  return(
    <ul>
    {taskItems}
    </ul>
  );
};
export default TaskList;
