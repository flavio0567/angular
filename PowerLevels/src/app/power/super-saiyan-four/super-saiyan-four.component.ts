import { Component, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnChanges {
  @Input()
  valueToChange: any;

  constructor() { }
  
  ngOnChanges() {
    this.valueToChange = this.valueToChange * 500;
  }
}
