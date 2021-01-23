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
  progressActive: boolean;
  eventsActive: boolean;
  announcementsActive: boolean;
  constructor(private activeService: ActiveService) { }

  async ngOnInit(): Promise<void> {
    await this.activeService.get()
      .then(res => {
        res = res[0];
        res.name_suggestion = (res.name_suggestion == 'true');
        res.gender_reveal = (res.gender_reveal == 'true');
        res.announcments = (res.announcments == 'true');
        res.events = (res.events == 'true');
        res.progress = (res.progress == 'true');
        this.suggestANameActive = res.name_suggestion;
        this.genderRevealActive = res.gender_reveal;
        this.progressActive = res.progress;
        this.eventsActive = res.events;
        this.announcementsActive = res.announcments;
      });

    this.links = [
      { url: '/announcements', title: 'ANNOUNCEMENTS', active: this.announcementsActive},
      { url: '/events', title: 'EVENTS', active: this.eventsActive  },
      { url: '/photos', title: 'PHOTOS', active: false  },
      { url: '/progress', title: 'PROGRESS', active: this.progressActive  },
      { url: '/suggestaname', title: 'SUGGEST A NAME', class: 'text-names', active: this.suggestANameActive  },
      { url: 'https://buybuybaby.com', title: 'GIFT REGISTRY', class: 'text-registry', active: true  },
      { url: '/genderreveal', title: 'GENDER REVEAL', class: 'text-gender-reveal', active: this.genderRevealActive },
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
