import { Component, OnInit } from '@angular/core';
import { WOW } from '../../../node_modules/wowjs/dist/wow.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    new WOW().init();
  } 
}
