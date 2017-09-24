import {actions} from "./todolist"

describe('Action: setNewTitle', () => {
    test('Updates the title of the next todo', () => {
        const startingState = {
            todos: [],
            nextTodo: {text: "", id: 0}
        };
        const updatedState = actions.setNewTitle(startingState, {},
            "do the thing");

        expect(updatedState.nextTodo.text).toEqual("do the thing");
    });
});

describe('Action: addTodo', () => {
    test('Moves the current nextTodo on to the list', () => {
        const startingState = {
            todos: [],
            nextTodo: {text: "first thing", id: 0, done: false}
        };
        const updatedState = actions.addTodo(startingState);

        expect(updatedState.todos).toEqual([{text: "first thing", id: 0, done: false}]);
    });

    test('Resets the next todo and increments the id', () => {
        const startingState = {
            todos: [],
            nextTodo: {text: "fourth thing", id: 4, done: false}
        };
        const updatedState = actions.addTodo(startingState);

        expect(updatedState.nextTodo).toEqual({text: "", id: 5, done: false});
    });
});

describe('Action: markAsDone', () => {
    test('Sets the done flag on a todo', () => {
        const startingState = {
            todos: [
                {text: "thing 1", id: 1, done: false},
                {text: "almost done", id: 4, done: false},
                {text: "thing 5", id: 5, done: false}
            ],
            nextTodo: {text: "next thing", id: 5, done: false}
        };
        const updatedState = actions.markAsDone(startingState, {}, 4);

        expect(updatedState.todos).toContainEqual({text: "almost done", id: 4, done: true});
        expect(updatedState.todos).not.toContainEqual({text: "almost done", id: 4, done: false});
    });
});