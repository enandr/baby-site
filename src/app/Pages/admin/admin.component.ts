import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../Services/progress.service';
import { ActiveService } from '../../Services/active.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  progressTitle: string;
  progressDetails: string;
  progressDate: any;
  activeAnnouncements: boolean;
  activeEvent: boolean;
  activeProgress: boolean;
  activeName: boolean;
  activeGender: boolean;
  isAdmin = false;
  constructor(private progressService: ProgressService, private activeService: ActiveService) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('admin') === 'true'){
      this.isAdmin = true;
      this.setCheckBoxes();
    } else {
      this.isAdmin = false;
    }
  }

  async setCheckBoxes(): Promise<void> {
    await this.activeService.get()
      .then(res => {
        res = res[0];
        console.log(res);
        res.name_suggestion = (res.name_suggestion == 'true');
        res.gender_reveal = (res.gender_reveal == 'true');
        res.announcments = (res.announcments == 'true');
        res.events = (res.events == 'true');
        res.progress = (res.progress == 'true');
        this.activeAnnouncements = res.announcments;
        this.activeEvent = res.events;
        this.activeProgress = res.progress;
        this.activeName = res.name_suggestion;
        this.activeGender = res.gender_reveal;
      })
  }

  async onSubmit(event) {
    let date = this.progressDate.slice(5, 7) + '/' + this.progressDate.slice(8) + '/' + this.progressDate.slice(0,4);
    await this.progressService.post(this.progressTitle, this.progressDetails, date)
      .then(() => {
        this.progressTitle = undefined;
        this.progressDetails = undefined;
        this.progressDate = undefined;
      })
      .catch(err => console.log(err));
  }

  async onSave() {
    await this.activeService.update(this.activeName, this.activeGender, this.activeProgress, this.activeAnnouncements, this.activeEvent)
      .then(res => {
      })
      .catch(err => console.log(err));
  }

  onChange(event, activeToChange) {
    console.log(activeToChange, this[activeToChange]);

  }

}
