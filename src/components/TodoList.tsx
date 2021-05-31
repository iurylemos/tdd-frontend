import React, { ChangeEvent, FormEvent, useState } from 'react';

export const TodoList: React.FC = () => {
    const [task, setTask] = useState<string>('');
    const [tasks, setTasks] = useState<Array<string>>([]);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setTask(event.target.value);
    }

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInput} placeholder="Type a new task here" value={task} />
                <button type="submit">Add new task</button>
            </form>
            <table>
                <thead>
                    <tr>Task</tr>
                </thead>
                <tbody>
                    {
                        (tasks && tasks.length) ? tasks.map((t, idx) => (
                            <tr key={Math.random() + idx}>
                                <td>{t}</td>
                            </tr>
                        )) : (<></>)
                    }
                </tbody>
            </table>
        </>
    )
}