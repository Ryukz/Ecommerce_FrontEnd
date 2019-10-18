import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoproductComponent } from './addtoproduct.component';

describe('AddtoproductComponent', () => {
  let component: AddtoproductComponent;
  let fixture: ComponentFixture<AddtoproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtoproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
