import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarpoolComponent } from './add-carpool.component';

describe('AddCarpoolComponent', () => {
  let component: AddCarpoolComponent;
  let fixture: ComponentFixture<AddCarpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarpoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
