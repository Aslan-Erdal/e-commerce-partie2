import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePaymentComponent } from './article-payment.component';

describe('ArticlePaymentComponent', () => {
  let component: ArticlePaymentComponent;
  let fixture: ComponentFixture<ArticlePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
