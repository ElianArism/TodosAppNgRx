import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./todos/models/todo.model";
import { filtrosValidos } from "./filtro/filtro.actions";

import { filtroReducer } from "./filtro/filtro.reducer";
import { todoReducer } from "./todos/todo.reducer";

// state global
export interface AppState {
    todos: Todo[];     
    filter: filtrosValidos
}


// config reducers de la app
export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filtroReducer
}