const [todos,setTodos]=useState([
    {id : 1,text:"walk dog"},
    {id : 2,text:"Buy milk"}
]);

{
    todos.map(todo=>(
        <li key={todo.id}>
            <input defaultValue={todo.text} />
            <button onClick={() => removeTodo(todo.id)}>delete</button>
        </li>
    ))
}