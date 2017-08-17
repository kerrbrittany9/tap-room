import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "strength",
  pure: false
})

export class StrengthPipe implements PipeTransform {
  transform(input: Keg[], desiredStrength) {
    var output: Keg[] = [];
    if(desiredStrength === "strongKegs"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].abv >= 5.8) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStrength === "mediumKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].abv < 5.8) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
