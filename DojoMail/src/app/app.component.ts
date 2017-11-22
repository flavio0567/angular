import { Component } from '@angular/core';

import { Mail } from './mail';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  mails = [
    new Mail('BILL@gates.com', true, 'New Windows', 'Windows XI will launch in year 2100'),
    new Mail('ada@lovelace.com', true, 'Programming','Enchantress of Numbers'),
    new Mail('john@carmac.com', false, 'Updated Algo', 'New algorithm for shadow volumes'),
    new Mail('GABE@NEWEL.com', false, 'HL3!', 'Just kidding...')
  ];

}
