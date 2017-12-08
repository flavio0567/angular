import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {  
  numbersbeta: number[] = [];
  
  constructor(private _dataService: DataService) { }
 
  ngOnInit() {
    this.numbersbeta = this._dataService.retrieveBetaNumbers();
  }

  pushOne(num: number[]) {
    this.numbersbeta.push(Math.ceil(Math.random() * 10));
    console.log(this.numbersbeta);
  }

}
