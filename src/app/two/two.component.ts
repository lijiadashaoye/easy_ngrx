import { Component, OnInit } from '@angular/core';
import {
  Store,
  Select
} from "@ngxs/store";
import { TodoState, AddTodo, RemoveTodo } from "../app.state";
import { Observable } from "rxjs";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  data: any;
  @Select(TodoState.isSelector)
  todos$: Observable<string[]>;

  constructor(
    private store: Store
  ) { }
  ngOnInit() {
    // 使用selector
    this.todos$.subscribe(val => {
      this.data = val;
    });
  }
  toWhere(da) {
    switch (da) {
      case 1: this.store.dispatch(new AddTodo('eat'))
        .subscribe((ff) => {
          // console.log(ff)
        });
        break;
      case 2: this.store.dispatch(new RemoveTodo('eat'))
        .subscribe((ff) => {
          // console.log(ff)
        });
        break;
    }
  }
}
