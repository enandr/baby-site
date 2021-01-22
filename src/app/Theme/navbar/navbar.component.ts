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
      { url: '/announcements', title: 'ANNOUNCEMENTS', active: true},
      { url: '/events', title: 'EVENTS', active: true  },
      { url: '/photos', title: 'PHOTOS', active: true  },
      { url: '/progress', title: 'PROGRESS', active: true  },
      { url: '/suggestaname', title: 'SUGGEST A NAME', class: 'text-names', active: true  },
      { url: 'https://buybuybaby.com', title: 'GIFT REGISTRY', class: 'text-registry', active: true  },
      { url: '/genderreveal', title: 'GENDER REVEAL', class: 'text-gender-reveal', active: false },
    ];
    this.links.map((link, index) => {
      if (link.active === false){
        this.links.splice(index, 1);
      }
    })
    if (window.sessionStorage.getItem('admin') === 'true'){
      this.links.push({ url: '/admin', title: 'ADMIN', class: 'text-gender-reveal', active: true })
    }
  }

}
