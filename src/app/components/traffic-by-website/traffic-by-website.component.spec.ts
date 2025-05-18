import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficByWebsiteComponent } from './traffic-by-website.component';

describe('TrafficByWebsiteComponent', () => {
  let component: TrafficByWebsiteComponent;
  let fixture: ComponentFixture<TrafficByWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficByWebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficByWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
