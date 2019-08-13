import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello kgomotsoApp';

  menu = [
  {
        item_id:'1',
        item_name:'Spatlho',
        item_price:'100'
  },
  {
    item_id:'2',
    item_name:'McDeezy Kota',
    item_price:'200'
  }
];
}
