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
  imgSource = "./favicon.ico";
  enable = true;
}
