// @flow

export type Todo = {
    text: string,
    id: number
};

// Parts of each state - allows for hinting on partial updates
type StateTodos = {
    todos: Array<Todo>
}

type StateNextTodo = {
    nextTodo: Todo
}

// The full state is the intersection of all the sub parts
export type State = StateTodos & StateNextTodo;

export type Actions = {
    addTodo: (State) => StateTodos & StateNextTodo,
    setNewTitle: (State, Actions, string) => StateNextTodo,
};