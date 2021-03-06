import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []; 
  filtroActual: filtrosValidos; 
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store
    .subscribe(state => {
        this.todos = state.todos; 
        this.filtroActual = state.filter;
    });
  }

}
