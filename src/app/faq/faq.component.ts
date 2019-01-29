import { Component, OnInit } from '@angular/core';
import { WOW } from '../../../node_modules/wowjs/dist/wow.js';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    new WOW().init();
  } 

}
