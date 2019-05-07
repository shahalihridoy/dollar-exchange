import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signin4Component } from './signin4.component';

describe('Signin4Component', () => {
  let component: Signin4Component;
  let fixture: ComponentFixture<Signin4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signin4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signin4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
