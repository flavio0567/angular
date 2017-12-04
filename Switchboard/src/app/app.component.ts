import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Switchboard';
  
  switch: boolean = true;

  items = [true, false, true, false, true, false, true, false, true, false ]; 

  createButton(i) {
    this.items[i] = !this.items[i];

  }

  switchButton(i) {
    this.items[i] = !this.items[i];
  }
  
  // onButtonClick() {
  //   var btn;
  //   if (this.switch) {
  //     console.log('this sw on');
  //     btn = 'ON';
  //   } else { 
  //     console.log('this sw off');
  //     btn = 'OFF';
  //   }
  //   console.log(btn)
  //   return btn;
  // }


}
