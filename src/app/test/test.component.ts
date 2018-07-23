import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
   // 在providers中配置AuthService
   // providers: [AuthService],
})
export class TestComponent implements OnInit {
  title = 'hello my child';
  username = '';
  password = '';
 // service: AuthService; // 声明成员变量，其类型为AuthService

   // 在构造函数中将AuthService示例注入到成员变量service中
  // 而且我们不需要显式声明成员变量service了
  // x2. private service: AuthService

  // x3. @Inject('auth') private service
  constructor(@Inject('auth') private service) {
   // this.service = new AuthService();
  }

  ngOnInit() {
  }

  onClick(username, password = '123') {
    console.log('button was clicked');
    console.log(this.service.loginWithCredentials(username, password));
  }

  onClick2() {
    console.log('auth result is: '
    + this.service.loginWithCredentials(this.username, this.password));
  }

  onSubmit(formValue) {
    console.log(formValue);
  }

}
