import { Component, OnInit } from '@angular/core';
import {
  Store,
  Select,
  Actions,
  ofAction,
  ofActionDispatched,
  ofActionSuccessful
} from "@ngxs/store";
import { TodoState, AddTodo, RemoveTodo } from "../app.state";
import { Observable } from "rxjs";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  data: any;
  @Select(TodoState.isSelector)
  todos$: Observable<string[]>;

  constructor(
    private store: Store
  ) { }
  ngOnInit() {
    // 使用selector,一旦发生数据变动，这里就会自动执行
    this.todos$.subscribe(val => {
      this.data = val;
    });
  }
  // 触发状态变更
  toWhere(da) {
    switch (da) {
      case 1: this.store.dispatch(new AddTodo('eat'))
        .subscribe((ff) => {
          // 返回 state 对象
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
