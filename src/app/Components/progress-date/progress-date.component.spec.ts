import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDateComponent } from './progress-date.component';

describe('ProgressDateComponent', () => {
  let component: ProgressDateComponent;
  let fixture: ComponentFixture<ProgressDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
