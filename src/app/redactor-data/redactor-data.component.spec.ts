import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactorDataComponent } from './redactor-data.component';

describe('RedactorDataComponent', () => {
  let component: RedactorDataComponent;
  let fixture: ComponentFixture<RedactorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedactorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
