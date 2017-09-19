'use strict';
import { h, app } from "hyperapp";

import {emptyState, actions} from "./src/todolist";

const view = ({todos, nextTodoTitle}, {addTodo, setNewTitle}) => (
    <div>
        <input type="text" id="new-title" onchange={e => setNewTitle(e.target.value)}/>
        <button onclick={e => addTodo()}>add</button>
        <ul>
            {
                todos.map((todo) => (<li>{todo.text}</li>))
            }
        </ul>
    </div>
);


app({state: emptyState, view, actions});