import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterHoursSectionComponent } from './after-hours-section.component';

describe('AfterHoursSectionComponent', () => {
  let component: AfterHoursSectionComponent;
  let fixture: ComponentFixture<AfterHoursSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterHoursSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterHoursSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
