import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnChanges {
  @Input() 
  valueToChange: any;

  constructor() { }

  ngOnChanges() {
    this.valueToChange = this.valueToChange * 90;
  }
}
