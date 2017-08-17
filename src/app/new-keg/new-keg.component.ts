import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(brand: string, name: string, price: number, abv: number) {
   var newKegToAdd: Keg = new Keg(brand, name, price, abv);
   this.newKegSender.emit(newKegToAdd);
 }
}
