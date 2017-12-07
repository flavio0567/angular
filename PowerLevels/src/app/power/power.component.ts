import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  powerToChange: number;
  
  setValue(event) {
    this.powerToChange = event;
    console.log(this.powerToChange)
  }
  
  objectToChange = { powerToChange: this.powerToChange };
  
  resetToDefaultValue() {
    this.objectToChange.powerToChange = this.powerToChange;
  }

  passValueToChild() {
    this.powerToChange = this.powerToChange;;
  }

}
