import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDComponent } from './LevelD.component';

describe('LevelDComponent', () => {
  let component: LevelDComponent;
  let fixture: ComponentFixture<LevelDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
