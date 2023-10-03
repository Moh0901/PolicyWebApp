import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyDetailsComponent } from './view-policy-details.component';

describe('ViewPolicyDetailsComponent', () => {
  let component: ViewPolicyDetailsComponent;
  let fixture: ComponentFixture<ViewPolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
