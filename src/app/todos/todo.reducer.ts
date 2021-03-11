import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, editar, eliminar, eliminarCompletados, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo, 
          completado: !todo.completado
        }
      }
      return todo;
    }); 
  }), 
  on(toggleAll, (state, {toggleTo}) => {
    return state.map(todo => {
      return {
        ...todo, 
        completado: toggleTo
      };
    }); 
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo, 
          texto
        };
      }
      return todo;
    });
  }), 
  on(eliminar, (state, {id}) => {
    return state.filter(todo => todo.id !== id); 
  }),
  on(eliminarCompletados, (state) => {
    return state.filter(todo => !todo.completado); 
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}