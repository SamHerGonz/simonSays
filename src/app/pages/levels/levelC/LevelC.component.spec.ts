import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCComponent } from './LevelC.component';

describe('LevelCComponent', () => {
  let component: LevelCComponent;
  let fixture: ComponentFixture<LevelCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
