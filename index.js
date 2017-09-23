// @flow
// @jsx h

import { h, app } from "hyperapp";

import type {Actions, State} from './src/types';
import {emptyState, actions} from "./src/todolist";
import {renderInputBar, renderTodoList} from "./src/todoview";


const view = (state: State, actions: Actions) => (
    <div>
        {renderInputBar(state, actions)}
        {renderTodoList(state)}
    </div>
);

app({state: emptyState, view, actions});