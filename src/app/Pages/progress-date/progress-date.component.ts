import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../Services/progress.service';
@Component({
  selector: 'app-progress-date',
  templateUrl: './progress-date.component.html',
  styleUrls: ['./progress-date.component.scss']
})
export class ProgressDateComponent implements OnInit {
  events: any[];
  isAdmin = false;
  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    if (window.sessionStorage.getItem('admin') === 'true') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    this.getProgress();
    /* this.events = [
      { date: '01/15/2021', title: 'Discovered Pregnancy', description: 'On friday January 15th, Saretha and I discovered we were expecting! A brand new baby Enand is on the way.'}
    ] */
  }
  async getProgress(): Promise<void> {
    this.events = await this.progressService.get();
  }

  async onSubmit(event, id) {
    await this.progressService.delete(id)
      .then(() => {
        this.getProgress();
      })
      .catch(err => console.log(err));
  }

}
