import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelAComponent } from './LevelA.component';

describe('LevelAComponent', () => {
  let component: LevelAComponent;
  let fixture: ComponentFixture<LevelAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
