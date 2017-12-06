import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validator } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// class ModelFormComponent {
//   myform: FormGroup;

//   ngOnInit() {
//     this.myform = new FormGroup({
//         name: new FormGroup({
//             firstName: new FormControl('', Validators.required), 
//             lastName: new FormControl('', Validators.required),
//         }),
//         email: new FormControl('', [ 
//             Validators.required,
//             Validators.pattern("[^ @]*@[^ @]*") 
//         ]),
//         password: new FormControl('', [
//             Validators.minLength(8), 
//             Validators.required
//         ]),
//         language: new FormControl() 
//     });
//   }
// }