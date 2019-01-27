import { Component, OnInit } from '@angular/core';
import { WOW } from '../../../node_modules/wowjs/dist/wow.js';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW().init();
  }

}
