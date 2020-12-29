import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10psychiatristComponent } from './top10psychiatrist.component';

describe('Top10psychiatristComponent', () => {
  let component: Top10psychiatristComponent;
  let fixture: ComponentFixture<Top10psychiatristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10psychiatristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10psychiatristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
