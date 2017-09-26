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

const renderListItem = (todo: Todo, {markAsDone}: ViewActions) => (
    <li
        onclick={e => {markAsDone(todo.id)}}
    >
        {todo.text}
    </li>
);

const renderTodoList = ({todos}: State, actions: ViewActions) => (
    <ul>
        {
            todos
            .filter(todo => ! todo.done)
            .map(todo => renderListItem(todo, actions))
        }
    </ul>
);

export {renderInputBar, renderTodoList};