import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsoonComponent } from './contactsoon.component';

describe('ContactsoonComponent', () => {
  let component: ContactsoonComponent;
  let fixture: ComponentFixture<ContactsoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
