import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnChanges {
  @Input()
  valueToChange: any;

  constructor() { }
  
  ngOnChanges() {
    this.valueToChange = this.valueToChange * 250;
  }

}
