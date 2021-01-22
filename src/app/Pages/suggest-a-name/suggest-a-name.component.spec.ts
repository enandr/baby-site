import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestANameComponent } from './suggest-a-name.component';

describe('SuggestANameComponent', () => {
  let component: SuggestANameComponent;
  let fixture: ComponentFixture<SuggestANameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestANameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestANameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
