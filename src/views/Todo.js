export function Todo(props) {
    const handleDelete = (id) => {
        props.deleteDataTodo(id)
    }
    return (
        <div className="todos-container" style={{ textAlign: 'left' }}>
            <div className="title">
                {props.title}
            </div>
            {props.todos.map(todo => {
                return (
                    <li className="todo-child" key={todo.id}>
                        {todo.title}
                        &nbsp; &nbsp; <span onClick={() => handleDelete(todo.id)} style={{cursor:'pointer'}}>x</span>
                    </li>
                )
            })}
            <hr />
        </div>
    );
}

