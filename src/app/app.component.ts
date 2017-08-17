import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Rogue', 'Dead Guy Ale', 500, '5.6'),
    new Keg('Ninkasi', 'Total Domination', 450, '6.7'),
    new Keg('10 Barrel', 'Apocalypse IPA', 525, '6.5'),
    new Keg('Cascade', 'Figaro 2015', 475, '8.4'),
    new Keg('Full Sail', 'Blood Orange Wheat', 495, '5.2')
  ];

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  finishedEditing(){
    this.selectedKeg = null;
  }


  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
