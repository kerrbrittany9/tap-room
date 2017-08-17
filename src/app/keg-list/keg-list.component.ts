import { Component, Input } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  @Input() childKegList: Keg[];

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
      } else if (currentKeg.pints <= 30 ) {
        return 'bg-danger';
      }
    }
}
