import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BEER Brittany drinks!';
  firstKeg: Keg = new Keg('Rogue', 'Pirate Ship', 500, '5.6');
}

export class Keg {
  public empty: boolean = false;
  constructor(public brand: string, public name: string, public price: number, public abv: string) { }
}
