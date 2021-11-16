import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAngCompoComponent } from './auto-ang-compo.component';

describe('AutoAngCompoComponent', () => {
  let component: AutoAngCompoComponent;
  let fixture: ComponentFixture<AutoAngCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoAngCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoAngCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
