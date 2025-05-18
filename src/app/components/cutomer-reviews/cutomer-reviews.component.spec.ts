import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerReviewsComponent } from './cutomer-reviews.component';

describe('CutomerReviewsComponent', () => {
  let component: CutomerReviewsComponent;
  let fixture: ComponentFixture<CutomerReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomerReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
