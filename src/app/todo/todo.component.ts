import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

import { TodoHeaderComponent } from './todo-header/todo-header.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  todos: Todo[]  = [];
  desc = '';

  // 唤起子组件
  @ViewChild(TodoHeaderComponent) child: TodoHeaderComponent;

  constructor(private service: TodoService) { }

  // 初始化函数
  ngOnInit() {
    console.log(this.child.childs());
    this.child.placeholder = '我要改变子组件的placeholder';
  }

  add() {
   // this.todos.push({id: '1', desc: this.desc, completed: false});
    this.todos = this.service.add(this.desc);
    this.desc = '';
    console.log(this.todos);
  }

  addTodo() {
    this.service
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
        console.log(todo);
      });
  }

  addTodos(ev) {
    console.log(ev);  // 子组件发来信息
  }

  onTextChanges(ev) {
    console.log(ev);
  }

}
