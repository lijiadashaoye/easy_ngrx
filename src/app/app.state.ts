import { State, Action, StateContext, Selector } from "@ngxs/store";
// 创建action
// payload数据类型取决于前边 this.store.dispatch(new AddTodo('eat'))
// 里面传递的数据类型，现在是'eat'字符串
export class AddTodo {
  static type = "[todo] AddTodo";
  constructor(public readonly payload: string) { }
}
export class RemoveTodo {
  static type = "[todo] RemoveTodo";
  constructor(public readonly payload: string) { }
}

// 定义 state 集合
@State({
  name: "todo",
  defaults: []
})
export class TodoState {
  @Selector()
  static isSelector(state: string[]) {
    // state 就是上边的 default 数组，数据类型依据 dispatch 传递的数据类型而定
    return state.filter(s => {
      return s
    });
  }

  @Action(AddTodo)
  // 函数名可以随便取，后边会调用
  dddd(
    {
      getState, // 初始状态
      setState // 要变的状态
    }: StateContext<string[]>,
    {
      payload // 附加数据，前边 this.store.dispatch(new AddTodo('eat')),里的'eat'
    }: AddTodo
  ) {
    setState([...getState(), payload]); // 变更状态方法，不要删除之前的数据，始终是往里添加
  }

  @Action(RemoveTodo)
  removeTodo(
    { getState, setState }: StateContext<string[]>,
    { payload }: RemoveTodo
  ) {
    setState(
      getState().filter((item, i) => {
        return i
      })
    );
  }
}