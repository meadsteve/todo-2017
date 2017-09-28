// @flow

type TodoId = number;

export type Todo = {
    text: string,
    id: TodoId,
    done: boolean
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
    markAsDone: (State, Actions, TodoId) => StateTodos
};

// Hyperjs converts the callbables slightly (autobinds the state, actions as the
// first 2 args)  so the type signatures won't match if we hinted on Actions
export type ViewActions = {
    addTodo: () => void,
    setNewTitle: (string) => void,
    markAsDone: (TodoId) => void
};