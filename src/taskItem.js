import React from 'react';

const TaskItem = (props) =>{
  const item = props.item;
  console.log("taskItem", props.item);
  return (<li> Nimi:{item.name} Tee: {item.task} </li>);
}

export default TaskItem;
// suoraan src:ssä
