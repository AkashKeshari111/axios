import { useState } from "react";

const AddTodo = ({ handleAdd, text, setText }) => {
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="write something here"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAdd(text)}>Add</button>
    </div>
  );
};

export default AddTodo;
