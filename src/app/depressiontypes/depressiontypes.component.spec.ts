import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepressiontypesComponent } from './depressiontypes.component';

describe('DepressiontypesComponent', () => {
  let component: DepressiontypesComponent;
  let fixture: ComponentFixture<DepressiontypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepressiontypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepressiontypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
