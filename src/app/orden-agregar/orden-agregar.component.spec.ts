import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenAgregarComponent } from './orden-agregar.component';

describe('OrdenAgregarComponent', () => {
  let component: OrdenAgregarComponent;
  let fixture: ComponentFixture<OrdenAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
