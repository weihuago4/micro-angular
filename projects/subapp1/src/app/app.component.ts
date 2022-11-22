import { Component } from '@angular/core';

@Component({
  selector: 'app-root#subapp1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'subapp1';


  isActive() {
    return Date.now() % 2 === 0;
  }
}
