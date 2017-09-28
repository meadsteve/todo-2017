import { h } from "hyperapp";

import {renderTodoList, renderInputBar} from "./todoview";

describe('View Section: renderTodoList', () => {

    const actions = {setAsDone: e => {}};

    test('Renders an empty <ul /> for an empty list', () => {
        const todos = [];
        expect(renderTodoList({todos}, actions)).toEqual(<ul/>);
    });

    test('Creates an <li> item for each todo', () => {
        const todos = [
            {text: "Buy milk", id: 0},
            {text: "Drink milk", id: 1}
        ];
        expect(renderTodoList({todos}, actions)).toEqual(<ul>
            <li onclick={expect.anything()}>Buy milk</li>
            <li onclick={expect.anything()}>Drink milk</li>
        </ul>);
    });

    test('Removes any done elements', () => {
        const todos = [
            {text: "Buy milk", id: 0, done: true},
            {text: "Drink milk", id: 1, done: false}
        ];
        expect(renderTodoList({todos}, actions)).toEqual(<ul>
            <li onclick={expect.anything()}>Drink milk</li>
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