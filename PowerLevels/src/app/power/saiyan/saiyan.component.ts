import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnChanges {
  @Input() 
  valueToChange: any;

  ngOnChanges() {
    this.valueToChange = this.valueToChange * 10;
  }


}
