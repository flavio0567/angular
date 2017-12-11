import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input()
  mess: string;

  @Input()
  switch: boolean[];

  constructor(private _dataService: DataService) { }

}
