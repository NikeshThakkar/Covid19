import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitydataComponent } from './citydata.component';

describe('CitydataComponent', () => {
  let component: CitydataComponent;
  let fixture: ComponentFixture<CitydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
