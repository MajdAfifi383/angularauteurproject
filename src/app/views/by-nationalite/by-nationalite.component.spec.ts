import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByNationaliteComponent } from './by-nationalite.component';

describe('ByNationaliteComponent', () => {
  let component: ByNationaliteComponent;
  let fixture: ComponentFixture<ByNationaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByNationaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByNationaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
