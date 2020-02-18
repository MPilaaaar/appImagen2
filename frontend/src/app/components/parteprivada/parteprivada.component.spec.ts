import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteprivadaComponent } from './parteprivada.component';

describe('ParteprivadaComponent', () => {
  let component: ParteprivadaComponent;
  let fixture: ComponentFixture<ParteprivadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParteprivadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteprivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
