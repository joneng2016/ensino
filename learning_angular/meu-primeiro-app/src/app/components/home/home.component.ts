import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Angular";
  hasToShowTitle = false;
  listItens = [{id:1}, {id:2}, {id:3}];

  changeName() {
    this.name = "Angular 2";
    this.hasToShowTitle = true;
  }
}
