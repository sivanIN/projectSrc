import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthpolicydetailsComponent } from './healthpolicydetails.component';

describe('HealthpolicydetailsComponent', () => {
  let component: HealthpolicydetailsComponent;
  let fixture: ComponentFixture<HealthpolicydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthpolicydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthpolicydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
