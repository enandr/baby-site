import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'baby-site';
  allowAccess = false;
  ngOnInit(): void {
    if (window.sessionStorage.getItem('devMode') === 'true'){
      this.allowAccess = true;
    }
    else {
      this.allowAccess = false;
    }
  }
}
