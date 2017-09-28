// @flow
// @jsx h

import { h, app } from "hyperapp";

import type {ViewActions, State} from './src/types';
import {emptyState, actions} from "./src/todolist";
import {renderInputBar, renderTodoList} from "./src/todoview";


const view = (state: State, actions: ViewActions) => (
    <div>
        {renderInputBar(state, actions)}
        {renderTodoList(state, actions)}
    </div>
);

app({state: emptyState, view, actions});