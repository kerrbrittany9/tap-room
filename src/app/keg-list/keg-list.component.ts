import { Component } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  kegs: Keg[] = [
    new Keg('Rogue', 'Dead Guy Ale', 500, '5.6'),
    new Keg('Ninkasi', 'Total Domination', 450, '6.7'),
    new Keg('10 Barrel', 'Apocalypse IPA', 525, '6.5'),
    new Keg('Cascade', 'Figaro 2015', 475, '8.4'),
    new Keg('Full Sail', 'Blood Orange Wheat', 495, '5.2')
  ];

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
