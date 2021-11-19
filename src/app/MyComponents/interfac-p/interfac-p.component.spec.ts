import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacPComponent } from './interfac-p.component';

describe('InterfacPComponent', () => {
  let component: InterfacPComponent;
  let fixture: ComponentFixture<InterfacPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfacPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
