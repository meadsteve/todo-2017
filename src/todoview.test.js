import { h } from "hyperapp";

import {renderTodoList, renderInputBar} from "./todoview";

describe('View Section: renderTodoList', () => {
    test('Renders an empty <ul /> for an empty list', () => {
        const todos = [];
        expect(renderTodoList({todos})).toEqual(<ul/>);
    });

    test('Creates an <li> item for each todo', () => {
        const todos = [
            {text: "Buy milk", id: 0},
            {text: "Drink milk", id: 1}
        ];
        expect(renderTodoList({todos})).toEqual(<ul>
            <li>Buy milk</li>
            <li>Drink milk</li>
        </ul>);
    });
});

describe('View Section: renderInputBar', () => {

    test('Has input text matching the next todo text', () => {
        const nextTodo = {text: "Buy milk", id: 0};
        const actions = {addTodo: e => {}, setNewTitle: e => {}};
        expect(renderInputBar({nextTodo}, actions)).toEqual(<span>
            <input type="text" id="new-title" value="Buy milk" onchange={expect.anything()}/>
            <button onclick={expect.anything()}>add</button>
        </span>);
    });
});