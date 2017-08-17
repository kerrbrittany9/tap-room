import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BEER Brittany drinks!';
  kegs: Keg[] = [
    new Keg('Rogue', 'Dead Guy Ale', 500, '5.6'),
    new Keg('Ninkasi', 'Total Domination', 450, '6.7'),
    new Keg('10 Barrel', 'Apocalypse IPA', 525, '6.5'),
    new Keg('Cascade', 'Figaro 2015', 475, '8.4'),
    new Keg('Full Sail', 'Blood Orange Wheat', 495, '5.2')
  ];
  selectedKeg = null;

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  finishedEditing(){
    this.selectedKeg = null;
  }

  sellPint(clickedKeg) {
    clickedKeg.pints -= 1;
    if (clickedKeg.pints === 10) {
      alert('keg is low');
    } else if (clickedKeg.pints === 0) {
      alert('keg is empty');
    }
  }

  pintColor(currentKeg) {
      if (currentKeg.pints < 60 && currentKeg.pints > 30) {
        return 'bg-warning';
      } else if (currentKeg.pints < 30 ) {
        return 'bg-danger';
      }
  }


}

export class Keg {
  public empty: boolean = false;
  public pints: number = 124;
  constructor(public brand: string, public name: string, public price: number, public abv: string) { }
}
