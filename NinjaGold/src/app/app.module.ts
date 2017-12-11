import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EarnGoldComponent } from './earn-gold/earn-gold.component';
import { MessageComponent } from './message/message.component';
import { DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    EarnGoldComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
