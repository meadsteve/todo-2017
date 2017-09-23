// @flow

import type {Actions, State} from './types';

const emptyState: State = {
    todos: [],
    nextTodo: {text: "", id: 0}
};

const actions: Actions = {
    addTodo(state) {
        let updatedTodos = state.todos;
        updatedTodos.push(state.nextTodo);
        return {
            todos: updatedTodos,
            nextTodo: {text: "", id: state.nextTodo.id + 1}
        }
    },
    setNewTitle(state, _actions, newText) {
        let nextTodo = state.nextTodo;
        nextTodo.text = newText;
        return {
            nextTodo: nextTodo
        }
    }
};

export {actions, emptyState}