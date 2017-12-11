import { Component, Input } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold Game';
  myGold: {
    goldToChange: any,
    cage:string
  }

  earn: number[];
  cage: string;
  switch: boolean[];
  mess: string[] = [];

  constructor(private _dataService: DataService) { }

  add(a, b) {
    return a + b;
  }

  getGold(myGold){
    // sibiling return    
    this.earn = myGold.goldToChange;
    this.cage = myGold.cage; 
    let num = this.earn[this.earn.length-1];

    if(num < 0) {
      this.mess.push("You've lost " + num + " gold at the " + this.cage);
      // this.switch.push('false');
      console.log(this.mess);
    } else {
      console.log(num);
      this.mess.push("You've earned " + num + " gold at the " + this.cage); 
      // this.switch.push('true');
      console.log(this.mess);  
    }

    // parent return
    this.earn = myGold.goldToChange;
    this.earn = this.earn.reduce(this.add, 0); 


  }
}
