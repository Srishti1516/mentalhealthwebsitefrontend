import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotioncaptureComponent } from './emotioncapture.component';

describe('EmotioncaptureComponent', () => {
  let component: EmotioncaptureComponent;
  let fixture: ComponentFixture<EmotioncaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotioncaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotioncaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
