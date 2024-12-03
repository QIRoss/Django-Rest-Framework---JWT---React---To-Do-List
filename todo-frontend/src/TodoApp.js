import React, { useState, useEffect } from 'react';
import api from './api';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await api.get('/todos/');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async () => {
        try {
            const response = await api.post('/todos/', {
                title: newTodo,
                description: '',
                completed: false,
            });
            setTodos([...todos, response.data]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
