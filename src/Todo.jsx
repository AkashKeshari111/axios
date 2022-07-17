import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { deleteTodo, getData, TodoAdd, Toggle } from "./Api";
import TodoItems from "./TodoItem";

const Todo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  const handleGetTodo = () => {
    setLoading(true);
    getData()
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  const handleAdd = (title) => {
    setLoading(true);
    TodoAdd({
      title,
      status: false,
    }).then(() => {
      handleGetTodo();
      setText("");
    });
  };

  const handleToggle = (id, newStatus) => {
    setLoading(true);
    Toggle({ id, newStatus }).then(() => {
      handleGetTodo();
    });
  };

  const handleDelete = (id) => {
    setLoading(true);
    deleteTodo(id).then(() => {
      handleGetTodo();
    });
  };

  return (
    <div>
      {loading && <h1>...Loading</h1>}
      {error && <h1>...Error</h1>}
      <div>
        <AddTodo handleAdd={handleAdd} setText={setText} text={text} />
      </div>
      <div>
        {data.map((item) => (
          <TodoItems
            id={item.id}
            status={item.status}
            title={item.title}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};
export default Todo;
