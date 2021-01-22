import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../Services/progress.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  progressTitle: string;
  progressDetails: string;
  progressDate: any;
  isAdmin = false;
  constructor(private progressService: ProgressService) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('admin') === 'true'){
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
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

}
