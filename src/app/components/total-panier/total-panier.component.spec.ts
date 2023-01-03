import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPanierComponent } from './total-panier.component';

describe('TotalPanierComponent', () => {
  let component: TotalPanierComponent;
  let fixture: ComponentFixture<TotalPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
