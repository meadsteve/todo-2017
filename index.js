'use strict';
import { h, app } from "hyperapp";

import {emptyState, actions} from "./src/todolist";
import {renderInputBar, renderTodoList} from "./src/todoview";


const view = (state, actions) => (
    <div>
        {renderInputBar(state, actions)}
        {renderTodoList(state)}
    </div>
);

app({state: emptyState, view, actions});