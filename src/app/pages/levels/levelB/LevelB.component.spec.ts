import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelBComponent } from './LevelB.component';

describe('LevelBComponent', () => {
  let component: LevelBComponent;
  let fixture: ComponentFixture<LevelBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
