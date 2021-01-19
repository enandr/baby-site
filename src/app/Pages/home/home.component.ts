import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  revealGender = false;
  constructor() { }

  ngOnInit(): void {
  }

  goToPage(link) {
    console.log("going to page:",link);
  }
}
