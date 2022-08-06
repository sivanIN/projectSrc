import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpolicypageComponent } from './userpolicypage.component';

describe('UserpolicypageComponent', () => {
  let component: UserpolicypageComponent;
  let fixture: ComponentFixture<UserpolicypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpolicypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpolicypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
