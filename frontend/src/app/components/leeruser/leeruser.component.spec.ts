import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeruserComponent } from './leeruser.component';

describe('LeeruserComponent', () => {
  let component: LeeruserComponent;
  let fixture: ComponentFixture<LeeruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
