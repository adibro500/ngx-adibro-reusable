import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-adibro-reusable';
  myval:any = '';
  public items = ['abcd','bef','cgh'];
}
