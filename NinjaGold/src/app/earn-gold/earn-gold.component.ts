import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-earn-gold',
  templateUrl: './earn-gold.component.html',
  styleUrls: ['./earn-gold.component.css']
})
export class EarnGoldComponent implements OnInit {
  myObj: number[] = [];

  @Output() 
    sendGoldToParent = new EventEmitter();

  constructor(private _dataService: DataService) { } 

  ngOnInit() {
  }

  sendToParentGold(event) {
    if(event === 'farm') {
      console.log('farm');
      this.myObj.push(Math.floor(Math.random() * (6 - 2) + 2));
    } else if(event === 'cave') {
      console.log('cave');
      this.myObj.push(Math.floor(Math.random() * (11 - 5) + 5));
    } else if(event === 'casino') {
      this.myObj.push(Math.floor(Math.random() * (-101 - 101) + 100));
    } else {
      this.myObj.push(Math.floor(Math.random() * (16 - 7) + 7));
    }
    let myGold = { goldToChange:this.myObj, cage:event }
    console.log('emit myGold.goldToChange :', myGold.goldToChange)
    console.log('emit myGold.cage :', myGold.cage)
    this.sendGoldToParent.emit(myGold);
  }


}
