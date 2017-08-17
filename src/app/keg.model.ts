export class Keg {
  public empty: boolean = false;
  public pints: number = 124;
  constructor(public brand: string, public name: string, public price: number, public abv: number) { }
}
