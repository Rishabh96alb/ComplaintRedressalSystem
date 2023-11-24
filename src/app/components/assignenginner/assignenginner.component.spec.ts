import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignenginnerComponent } from './assignenginner.component';

describe('AssignenginnerComponent', () => {
  let component: AssignenginnerComponent;
  let fixture: ComponentFixture<AssignenginnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignenginnerComponent]
    });
    fixture = TestBed.createComponent(AssignenginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
