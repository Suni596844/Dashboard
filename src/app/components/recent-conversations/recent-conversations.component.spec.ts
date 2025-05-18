import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentConversationsComponent } from './recent-conversations.component';

describe('RecentConversationsComponent', () => {
  let component: RecentConversationsComponent;
  let fixture: ComponentFixture<RecentConversationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentConversationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
