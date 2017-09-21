import { h } from "hyperapp";

import {renderTodoList, renderInputBar} from "./todoview";
import {actions} from './todolist';

describe('View Section: renderTodoList', () => {
    test('Renders an empty <ul /> for an empty list', () => {
        const todos = [];
        expect(renderTodoList(todos)).toEqual(<ul/>);
    });

    test('Creates an <li> item for each todo', () => {
        const todos = [
            {text: "Buy milk", id: 0},
            {text: "Drink milk", id: 1}
        ];
        expect(renderTodoList(todos)).toEqual(<ul>
            <li>Buy milk</li>
            <li>Drink milk</li>
        </ul>);
    });
});