import { h } from "hyperapp";
import type {Actions, State} from './types';

const renderInputBar = ({nextTodo}: State, {addTodo, setNewTitle}: Actions) => (
    <span>
        <input type="text" id="new-title" value={nextTodo.text} onchange={e => setNewTitle(e.target.value)}/>
        <button onclick={e => addTodo()}>add</button>
    </span>
);

const renderTodoList = ({todos}: State) => (
    <ul>
        {
            todos.map((todo) => (<li>{todo.text}</li>))
        }
    </ul>
);

export {renderInputBar, renderTodoList};