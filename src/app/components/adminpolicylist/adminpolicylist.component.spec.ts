import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpolicylistComponent } from './adminpolicylist.component';

describe('AdminpolicylistComponent', () => {
  let component: AdminpolicylistComponent;
  let fixture: ComponentFixture<AdminpolicylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpolicylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpolicylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
