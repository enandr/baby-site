import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: any[];
  constructor() { }

  ngOnInit(): void {
    this.links = [
      { url: '/announcements', title: 'ANNOUNCEMENTS'},
      { url: '/events', title: 'EVENTS' },
      { url: '/photos', title: 'PHOTOS' },
      { url: '/progress', title: 'PROGRESS' },
      { url: '/suggest-a-name', title: 'SUGGEST A NAME', class: 'text-names' },
      { url: 'https://buybuybaby.com', title: 'GIFT REGISTRY', class: 'text-registry' },
    ];
  }

}
