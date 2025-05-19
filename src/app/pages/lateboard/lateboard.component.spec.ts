import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateboardComponent } from './lateboard.component';

describe('LateboardComponent', () => {
  let component: LateboardComponent;
  let fixture: ComponentFixture<LateboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
