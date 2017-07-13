import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
  author = "Juan Rendon";
  count = 0;
  imgSource = "http://vectorlogo4u.com/wp-content/uploads/2016/05/angular-icon-vector.png";
  enable = true;
}   
