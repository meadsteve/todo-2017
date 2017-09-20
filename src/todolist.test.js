import {actions} from "./todolist"

describe('Action: setNewTitle', () => {
    test('Updates the title of the next todo', () => {
        const startingState = {
            todos: [],
            nextTodo: {text: "", id: 0}
        };
        const updatedState = actions.setNewTitle(startingState, {},
            "do the thing");

        expect(updatedState.nextTodo).toEqual({text: "do the thing", id: 0});
    });
});

describe('Action: addTodo', () => {
    test('Moves the current nextTodo on to the list', () => {
        const startingState = {
            todos: [],
            nextTodo: {text: "first thing", id: 0}
        };
        const updatedState = actions.addTodo(startingState);

        expect(updatedState.todos).toEqual([{text: "first thing", id: 0}]);
    });

    test('Resets the next todo and increments the id', () => {
        const startingState = {
            todos: [],
            nextTodo: {text: "fourth thing", id: 4}
        };
        const updatedState = actions.addTodo(startingState);

        expect(updatedState.nextTodo).toEqual({text: "", id: 5});
    });
});