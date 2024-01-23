import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserlistComponent } from './edituserlist.component';

describe('EdituserlistComponent', () => {
  let component: EdituserlistComponent;
  let fixture: ComponentFixture<EdituserlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdituserlistComponent]
    });
    fixture = TestBed.createComponent(EdituserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
