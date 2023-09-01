import { useState } from 'react';

const todos = [
    {
        id: 0,
        name: 'sacar la basura',
    },
    {
        id: 1,
        name: 'sacar la basura',
    },
    {
        id: 2,
        name: 'sacar la basura',
    },
    {
        id: 3,
        name: 'sacar la basura',
    },
];
export const TodoHandler = () => {
    const TodoDisplay = ({ name }: { name: string }) => {
        const [task, setTask] = useState(name);

        const [editing, setEditing] = useState(false);
        return (
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setEditing(!editing)}>rename</button>

                {editing ? <input placeholder={task} /> : <div>{task}</div>}

                <button>done</button>
                <button>delete</button>
            </div>
        );
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
            }}
        >
            {todos.map((todo) => (
                <TodoDisplay name={todo.name} />
            ))}
            <div>
                <button>add</button>
            </div>
        </div>
    );
};
