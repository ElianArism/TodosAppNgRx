import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  toggleBoolean = false; 
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.toggleBoolean = !this.toggleBoolean;
    this._store.dispatch(actions.toggleAll({toggleTo: this.toggleBoolean}));
  }
}
