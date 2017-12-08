import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit { 
  numbersalpha: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbersalpha = this._dataService.retrieveAlphaNumbers();
  }

  pushOne(num: number[]) {
    this.numbersalpha.push(Math.ceil(Math.random() * 10));
    console.log(this.numbersalpha);
  }

}
