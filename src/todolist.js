// @flow

import type {Actions, State, Todo} from './types';

const emptyState: State = {
    todos: [],
    nextTodo: {text: "", id: 0, done: false}
};

const actions: Actions = {
    addTodo(state) {
        let updatedTodos = state.todos;
        updatedTodos.push(state.nextTodo);
        return {
            todos: updatedTodos,
            nextTodo: {text: "", id: state.nextTodo.id + 1, done: false}
        }
    },

    setNewTitle(state, _actions, newText) {
        let nextTodo = state.nextTodo;
        nextTodo.text = newText;
        return {
            nextTodo: nextTodo
        }
    },

    markAsDone(state, _actions, doneId) {
        let updatedTodos = state.todos;
        updatedTodos.map(function(todo: Todo) {
            if (todo.id === doneId) {
                todo.done = true;
            }
            return todo;
        });
        return {
            todos: updatedTodos
        }
    }
};

export {actions, emptyState}