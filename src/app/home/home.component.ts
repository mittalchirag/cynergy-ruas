import { Component, OnInit } from '@angular/core';
import { WOW } from '../../../node_modules/wowjs/dist/wow.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    new WOW().init();
  }  

}

