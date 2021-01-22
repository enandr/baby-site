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
  constructor(private progressService: ProgressService) { }

  ngOnInit(): void {
  }

  async onSubmit(event) {
    console.log(this.progressTitle, this.progressDetails, this.progressDate);
    await this.progressService.post(this.progressTitle, this.progressDetails, this.progressDate)
      .then(() => {
        this.progressTitle = undefined;
        this.progressDetails = undefined;
        this.progressDate = undefined;
      })
      .catch(err => console.log(err));
  }

}
