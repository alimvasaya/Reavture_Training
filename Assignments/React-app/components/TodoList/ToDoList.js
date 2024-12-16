import React, { useState } from 'react';
import ListShow from './ListShow';
import ListAdd from './ListAdd';
import ListCount from './ListCount';

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState(''); 


  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim() === '') return;
    setList([...list, value]); 
    setValue('');
  };

  return (
    <div>
      <h3>To Do List</h3>
      <ListShow list={list} />
      <ListAdd value={value} setValue={setValue} submitHandler={submitHandler} />
      <ListCount list={list} />
    </div>
  );
};

export default ToDoList;
