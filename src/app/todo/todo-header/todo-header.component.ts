import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {
  inputValue= '';
  // 2 个输入变量
  @Input() placeholder = 'What needs to be done?';
  @Input() delay = 300;

  // 父组件中声明为@input的的属性才会成为子组件对外可见的属性

  @Output() textChanges = new EventEmitter<string>();
  @Output() onEnterUp = new EventEmitter<boolean>();

  // 响应式对象：利用observable观察html中的keyup事件，然后在事件流中做一个转换，map-发射输入框的值，时间滤波器，最后用一个筛选器
  constructor(private elementRef: ElementRef) {
    const event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.textChanges.emit(input));
  }
  enterUp() {
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }
}
