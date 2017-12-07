import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnChanges {
  @Input()
  valueToChange: any;

  constructor() { }
  
  ngOnChanges() {
    this.valueToChange = this.valueToChange * 150;
  }

}
