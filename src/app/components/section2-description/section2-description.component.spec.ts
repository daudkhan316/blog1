import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2DescriptionComponent } from './section2-description.component';

describe('Section2DescriptionComponent', () => {
  let component: Section2DescriptionComponent;
  let fixture: ComponentFixture<Section2DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2DescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section2DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
