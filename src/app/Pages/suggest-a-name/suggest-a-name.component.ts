import { Component, OnInit } from '@angular/core';
import { BabyNameService } from '../../../app/Services/baby-name.service';
@Component({
  selector: 'app-suggest-a-name',
  templateUrl: './suggest-a-name.component.html',
  styleUrls: ['./suggest-a-name.component.scss']
})
export class SuggestANameComponent implements OnInit {
  suggestorName: string;
  babyName: string;
  gender = "Boy";
  constructor(private babyNameService: BabyNameService) { }

  ngOnInit(): void {
  }

  async onSubmit(event){
    console.log(this.suggestorName, this.babyName, this.gender);
    await this.babyNameService.post(this.suggestorName, this.babyName, this.gender )
      .then(() => {
        this.suggestorName = undefined;
        this.babyName = undefined;
        this.gender = "Boy";
      })
      .catch(err => console.log(err));
  }
}
