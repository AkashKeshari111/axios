const TodoItems = ({ id, title, status, handleDelete, handleToggle }) => {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
      <div>{id}</div>
      <div>{title}</div>
      <button onClick={() => handleToggle(id, !status)}>
        {status ? "Done" : "Not Done"}
      </button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};

export default TodoItems;
