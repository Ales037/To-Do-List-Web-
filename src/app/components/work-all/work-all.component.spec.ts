import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAllComponent } from './work-all.component';

describe('WorkAllComponent', () => {
  let component: WorkAllComponent;
  let fixture: ComponentFixture<WorkAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
