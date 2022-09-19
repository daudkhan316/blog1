import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3BlogdetailsComponent } from './section3-blogdetails.component';

describe('Section3BlogdetailsComponent', () => {
  let component: Section3BlogdetailsComponent;
  let fixture: ComponentFixture<Section3BlogdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3BlogdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section3BlogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
