'use strict';

module.exports = {
    addTodo(state) {
        const newTodo = {
            title: state.nextTodoTitle,
            id: state.nextId
        };
        let updatedTodos = state.todos;
        updatedTodos[state.nextId] = newTodo;
        return {
            todos: updatedTodos,
            nextId: state.nextId + 1
        }
    },
    setNewTitle(_state, _actions, newText) {
        return {
            nextTodoTitle: newText
        }
    }
};