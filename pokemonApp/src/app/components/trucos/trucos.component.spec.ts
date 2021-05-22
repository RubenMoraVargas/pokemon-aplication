import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucosComponent } from './trucos.component';

describe('TrucosComponent', () => {
  let component: TrucosComponent;
  let fixture: ComponentFixture<TrucosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrucosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
