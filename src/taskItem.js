import React from 'react';

const TaskItem = (props) =>{
  const item = props.item;
  return (<li>
          Nimi:{item.name}
          Tehtävä: {item.task}
          <button> Valmis </button>
        </li>);
}
export default TaskItem;
