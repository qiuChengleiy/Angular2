import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue = '';

  // 绑入属性
  @Input() placeholder = 'What needs to be done?';
  @Input() delay = 300;

  // 唤起父组件
  @Output() onEnterUp = new EventEmitter<string>();
  @Output() textChanges = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  enterUp() {
    this.onEnterUp.emit('你好 我是子组件');
    this.textChanges.emit(this.inputValue);
    this.inputValue = '';
  }

  childs() {
    alert('父组件传入子组件');
  }

}
