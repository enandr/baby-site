import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNamesComponent } from './view-names.component';

describe('ViewNamesComponent', () => {
  let component: ViewNamesComponent;
  let fixture: ComponentFixture<ViewNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
