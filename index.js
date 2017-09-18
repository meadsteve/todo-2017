'use strict';
import { h, app } from "hyperapp";

import actions from "./src/actions";

const state = {
    todos: [
        {title: "hello item", id: 0}
    ],
    nextId: 1,
    nextTodoTitle:""
};

const view = ({todos, nextTodoTitle}, {addTodo, setNewTitle}) => (
    <div>
        <input type="text" id="new-title" onchange={e => setNewTitle(e.target.value)}/>
        <button onclick={e => addTodo()}>add</button>
        <ul>
            {
                state.todos.map((todo) => (<li>{todo.title}</li>))
            }
        </ul>
    </div>
);


app({state, view, actions});