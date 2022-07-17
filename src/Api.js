import axios from "axios";

export function getData() {
  return axios.get("  http://localhost:3001/data");
}

export function deleteTodo(id) {
  return axios({
    url: `http://localhost:3001/data/${id}`,
    method: "DELETE",
  });
}

export function TodoAdd({ title, status }) {
  return axios({
    url: `http://localhost:3001/data`,
    method: "POST",
    data: {
      title,
      status,
    },
  });
}
export function Toggle({ id, newStatus }) {
  return axios({
    url: `http://localhost:3001/data/${id}`,
    method: "PATCH",
    data: {
      status: newStatus,
    },
  });
}
