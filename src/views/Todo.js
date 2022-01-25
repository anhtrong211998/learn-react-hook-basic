export function Todo(props) {
    const todos = props.todos;
    return (
        <div className="todos-container" style={{ textAlign: 'left' }}>
            <div className="title">
                {props.title}
            </div>
            {todos.map(todo => {
                return (
                    <li className="todo-child" key={todo.id}> {todo.title}</li>
                )
            })}
            <hr/>
        </div>
    );
}

