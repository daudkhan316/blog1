import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4SubscriptionComponent } from './section4-subscription.component';

describe('Section4SubscriptionComponent', () => {
  let component: Section4SubscriptionComponent;
  let fixture: ComponentFixture<Section4SubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section4SubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section4SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
