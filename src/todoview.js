"use strict";
import { h } from "hyperapp";

const renderInputBar = ({nextTodo}, {addTodo, setNewTitle}) => (
    <span>
        <input type="text" id="new-title" value={nextTodo.text} onchange={e => setNewTitle(e.target.value)}/>
        <button onclick={e => addTodo()}>add</button>
    </span>
);

const renderTodoList = ({todos}) => (
    <ul>
        {
            todos.map((todo) => (<li>{todo.text}</li>))
        }
    </ul>
);

export {renderInputBar, renderTodoList};