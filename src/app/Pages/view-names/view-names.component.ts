import { Component, OnInit } from '@angular/core';
import { BabyNameService } from '../../../app/Services/baby-name.service';
@Component({
  selector: 'app-view-names',
  templateUrl: './view-names.component.html',
  styleUrls: ['./view-names.component.scss']
})
export class ViewNamesComponent implements OnInit {
  babyNames: any[];
  constructor(private babyNameService: BabyNameService) { }

  async ngOnInit(): Promise<void> {
    this.babyNames = await this.babyNameService.get();
  }

}
