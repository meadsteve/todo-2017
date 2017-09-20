'use strict';

const emptyState = {
    todos: [],
    nextTodo: {text: "", id: 0}
};

const actions = {
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