'use strict';
import { h, app } from "hyperapp";

import {emptyState, actions} from "./src/todolist";
import {renderInputBar, renderTodoList} from "./src/todoview";


const view = ({todos, nextTodoTitle}, {addTodo, setNewTitle}) => (
    <div>
        {renderInputBar({addTodo, setNewTitle})}
        {renderTodoList(todos)}
    </div>
);

app({state: emptyState, view, actions});