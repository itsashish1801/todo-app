import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({ todos: [...state.todos, { text, completed: false }] })),

  toggleTodo: (index) =>
    set((state) => {
      const todos = [...state.todos];
      todos[index].completed = !todos[index].completed;
      return { todos };
    }),

  removeTodo: (index) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
}));

export default useTodoStore;
