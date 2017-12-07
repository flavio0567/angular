import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnChanges  {
  @Input() 
  valueToChange: number = 0;

  ngOnChanges() {
    this.valueToChange = this.valueToChange * 1;
  }
}
