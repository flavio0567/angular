import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent {
  alphasum: any;
  betasum: any;
  valuesum: number;

  constructor(private _dataService: DataService) { }

  add(a, b) {
    return a + b;
  }

  getNumbers() {
    this.alphasum = this._dataService.callAlphas();
    this.betasum = this._dataService.callBetas();
    this.alphasum = this.alphasum.reduce(this.add, 0);
    this.betasum = this.betasum.reduce(this.add, 0);
    this.valuesum = this.alphasum - this.betasum;
    return this.valuesum;
  }

}
