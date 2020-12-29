import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiverssComponent } from './liverss.component';

describe('LiverssComponent', () => {
  let component: LiverssComponent;
  let fixture: ComponentFixture<LiverssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiverssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiverssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
