import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDemo } from './primeng-demo';

describe('PrimengDemo', () => {
  let component: PrimengDemo;
  let fixture: ComponentFixture<PrimengDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
