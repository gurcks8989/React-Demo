import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useFetch from './../../hooks/useFetch';

const NewTask = (props) => {
  const applyData = (data) => {
  const generatedId = data.name; // firebase-specific => "name" contains generated id
          const createdTask = { id: generatedId, text: taskText };

            props.onAddTask(createdTask);
    }
  const {enterTaskHandler, isLoading, error} = useFetch({
    url: "https://react-http-7adb5-default-rtdb.firebaseio.com/tasks.json",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:{ text: taskText },
  }, applyData) ;

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
