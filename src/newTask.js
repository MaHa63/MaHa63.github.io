import React from 'react';

const NewTask = (props) => {
  console.log("newTask");
  return(
    <form>
      <label>
        Nimi:
        <input type="text" name="nimi" />
      </label>
      <label>
        Tehtävä:
        <input type="text" name="task" />
      </label>
      <button> Lisää </button>
    </form>
  );
}
export default NewTask;
