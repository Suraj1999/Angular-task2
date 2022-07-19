import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltUserComponent } from './delt-user.component';

describe('DeltUserComponent', () => {
  let component: DeltUserComponent;
  let fixture: ComponentFixture<DeltUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeltUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
