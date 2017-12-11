import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  myGold: {
    goldToChange:any,
    cage:string;
  }

  constructor() { }

  retrieveGold() {
    console.log('retrieveGold: ', this.myGold);
    return this.myGold;
    }

  // addGold(num: number[]) {
  //   console.log('addGold: ', this.goldToChange);
  //   this.goldToChange = num;
  // }

  // retrieveCage(): string {
  //   console.log('retrieveCage: ', this.myGold.cage);
  //   return this.myGold.cage;
  // }

}
