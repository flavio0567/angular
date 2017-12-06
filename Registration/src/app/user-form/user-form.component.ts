import { Component } from '@angular/core';
import { User }    from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  submitted = false;

  user = new User();

  users = [];

  onSubmit() { 
    this.submitted = true; 
    this.users.push(this.user);
    this.user = new User();
  }

  states = [ 
    'Select a state',
    'Alabama',
    'Alaska',
    'Arizona', 
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware', 
    'District of Columbia',  
    'Florida',  
    'Georgia',
    'Hawaii', 
    'Idaho', 
    'Illinois',  
    'Indiana', 
    'Iowa', 
    'Kansas',  
    'Kentucky', 
    'Louisiana', 
    'Maine',  
    'Maryland',  
    'Massachusetts', 
    'Michigan', 
    'Minnesota',  
    'Mississippi', 
    'Missouri', 
    'Montana',  
    'Nebraska', 
    'Nevada',  
    'New Hampshire', 
    'New Jersey', 
    'New Mexico', 
    'New York', 
    'North Carolina', 
    'North Dakota', 
    'Ohio',  
    'Oklahoma',
    'Oregon',  
    'Pennsylvania',  
    'Puerto Rico',  
    'Rhode Island', 
    'South Carolina', 
    'South Dakota',  
    'Tennessee', 
    'Texas',  
    'Utah',  
    'Vermont', 
    'Virginia',  
    'Washington',  
    'West Virginia', 
    'Wisconsin', 
    'Wyoming'  
  ];
  model = new User(1, 'Flavio', 'Moura Rocha', 'flavio@gmail.com', '123', '123', '4447 Roscommon', '', 'Dublin', this.states[1], 'Yes');
  get diagnostic() { return JSON.stringify(this.model); }

}
