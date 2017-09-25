// @flow
// @jsx h

import { h } from "hyperapp";
import type {State, Todo, ViewActions} from './types';

const renderInputBar = ({nextTodo}: State, {addTodo, setNewTitle}: ViewActions) => (
    <span>
        <input type="text" id="new-title" value={nextTodo.text} onchange={e => setNewTitle(e.target.value)}/>
        <button onclick={e => addTodo()}>add</button>
    </span>
);

const renderListItem = (todo: Todo) => (
    <li style={todo.done ? "strike {text-decoration:line-through;}" : ""}>{todo.text}</li>
);

const renderTodoList = ({todos}: State) => (
    <ul>
        {
            todos.map(renderListItem)
        }
    </ul>
);

export {renderInputBar, renderTodoList};