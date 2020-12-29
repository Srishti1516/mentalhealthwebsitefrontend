import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindpalaceComponent } from './mindpalace.component';

describe('MindpalaceComponent', () => {
  let component: MindpalaceComponent;
  let fixture: ComponentFixture<MindpalaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindpalaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindpalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
