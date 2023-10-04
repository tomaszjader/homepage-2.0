import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCardComponent } from './github-card.component';

describe('GithubCardComponent', () => {
  let component: GithubCardComponent;
  let fixture: ComponentFixture<GithubCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
