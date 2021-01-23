import { Component, OnInit } from '@angular/core';
import { BabyNameService } from '../../../app/Services/baby-name.service';
@Component({
  selector: 'app-view-names',
  templateUrl: './view-names.component.html',
  styleUrls: ['./view-names.component.scss']
})
export class ViewNamesComponent implements OnInit {
  babyNames: any[];
  isAdmin = false;
  constructor(private babyNameService: BabyNameService) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('admin') === 'true') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    this.getNames();
  }

  async getNames(): Promise<void> {
    this.babyNames = await this.babyNameService.get();
  }

  async onSubmit(event, id) {
    await this.babyNameService.delete(id)
      .then(() => {
        this.getNames();
      })
      .catch(err => console.log(err));
  }
}
