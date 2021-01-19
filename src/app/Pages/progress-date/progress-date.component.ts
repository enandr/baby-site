import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-date',
  templateUrl: './progress-date.component.html',
  styleUrls: ['./progress-date.component.scss']
})
export class ProgressDateComponent implements OnInit {
  events: any[];
  constructor() {}

  ngOnInit(): void {
    this.events = [
      { date: '01/15/2021', title: 'Discovered Pregnancy', description: 'On friday January 15th, Saretha and I discovered we were expecting! A brand new baby Enand is on the way.'},
      // { date: 'xx/xx/2021', title: 'First Ultrasound', description: 'On x x xth, we did our first ultrasound.' }
    ]
  }

}
