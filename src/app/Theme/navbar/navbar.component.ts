import { Component, OnInit } from '@angular/core';
import { ActiveService } from '../../Services/active.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: any[];
  suggestANameActive: boolean;
  genderRevealActive: boolean;
  constructor(private activeService: ActiveService) { }

  async ngOnInit(): Promise<void> {
    await this.activeService.get()
      .then(res => {
        console.log(res);
        this.suggestANameActive = res.name_suggestion;
        this.genderRevealActive = res.gender_reveal;
      });

    this.links = [
      { url: '/announcements', title: 'ANNOUNCEMENTS', active: false},
      { url: '/events', title: 'EVENTS', active: false  },
      { url: '/photos', title: 'PHOTOS', active: false  },
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
