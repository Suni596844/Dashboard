import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchableGraphComponent } from './switchable-graph.component';

describe('SwitchableGraphComponent', () => {
  let component: SwitchableGraphComponent;
  let fixture: ComponentFixture<SwitchableGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchableGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchableGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
