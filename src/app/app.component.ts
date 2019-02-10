import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  activeMenu:number =1;
  activeClass:number =1;

  MenuSelector($event,classToSelect){
    this.activeClass =classToSelect;
    this.activeMenu =classToSelect;
 
  }
}
