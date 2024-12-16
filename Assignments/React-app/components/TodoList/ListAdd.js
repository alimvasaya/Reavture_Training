import React from 'react';

const ListAdd = ({ value, setValue, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} // Update the input value
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ListAdd;