import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Todo } from '../models/todo.model';
import * as actions from "../todo.actions";
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputEditar') txtEditar: ElementRef; 

  checkCompleted: FormControl;
  txtInput: FormControl; 
  editando: boolean = false;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required);

    this.onClickCheckbox();
  }

  onClickCheckbox() {
    this.checkCompleted.valueChanges.subscribe(isCompleted => {
      this._store.dispatch(actions.toggle({id: this.todo.id})); 
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtEditar.nativeElement.select();
    }, 1);

  }

  // cuando se apriete Enter y se guarde la edicion
  terminarEdicion() {
    this.editando = false;
    if(!this.txtInput.valid) return;
    this._store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}));
  }

  // cuando se deje de hacer focus a un Input
  cancelarEdicion() {
    this.editando = false;
  } 

  eliminar() {
    this._store.dispatch(actions.eliminar({id: this.todo.id})); 
  }
}
