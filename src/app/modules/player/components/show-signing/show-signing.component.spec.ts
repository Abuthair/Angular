import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSigningComponent } from './show-signing.component';

describe('ShowSigningComponent', () => {
  let component: ShowSigningComponent;
  let fixture: ComponentFixture<ShowSigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
