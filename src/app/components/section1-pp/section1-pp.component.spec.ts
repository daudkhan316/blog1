import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1PPComponent } from './section1-pp.component';

describe('Section1PPComponent', () => {
  let component: Section1PPComponent;
  let fixture: ComponentFixture<Section1PPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1PPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section1PPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
