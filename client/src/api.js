export const getTodos = () => fetch("http://localhost:8000/getAll").then(res=>res.json())

export const getTodo = (id) => fetch(`http://localhost:8000/${id}`).then(res => res.json())