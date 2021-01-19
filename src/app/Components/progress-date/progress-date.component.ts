import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-date',
  templateUrl: './progress-date.component.html',
  styleUrls: ['./progress-date.component.scss']
})
export class ProgressDateComponent implements OnInit {
  @Input() date: string;
  @Input() description: string;
  @Input() visible: boolean;
  constructor() {}

  ngOnInit(): void {
    if (!this.visible){
      this.visible = true;
    }
  }

}
