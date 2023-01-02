import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategeriesComponent } from './sub-categeries.component';

describe('SubCategeriesComponent', () => {
  let component: SubCategeriesComponent;
  let fixture: ComponentFixture<SubCategeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
