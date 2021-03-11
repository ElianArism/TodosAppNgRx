import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { AppState } from '../../app.state';
import * as filterActions from '../../filtro/filtro.actions';
import * as todoActions from '../todo.actions';

import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})

export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos; 
  filtros: filtrosValidos[] = ['all', 'active', 'completed']; 
  contadorTodos: number = 0; 
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {

    this._store
      .subscribe(state => {
        this.filtroActual = state.filter; 
        this.contadorTodos = state.todos.filter( todo => !todo.completado ).length;
      }); 
  
  }

  cambiarFiltro(filtro: filtrosValidos) {
    this._store.dispatch(filterActions.setFiltro({filtro}));
  }

  eliminarCompletados() {
    this._store.dispatch(todoActions.eliminarCompletados())
  }
}
