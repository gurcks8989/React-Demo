import React, { useState } from "react";

const useFetch = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);
      //   if (taskText === "") {
      //     const loadedTasks = [];
      //     for (const taskKey in data) {
      //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      //     }

      //     taskActionFn(loadedTasks);
      //     // setTasks(loadedTasks);
      //   } else {
      //     const generatedId = data.name; // firebase-specific => "name" contains generated id
      //     const createdTask = { id: generatedId, text: taskText };

      //     taskActionFn(createdTask);
      //     //   props.onAddTask(createdTask);
      //   }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return { sendRequest, isLoading, error };
};

export default useFetch;
