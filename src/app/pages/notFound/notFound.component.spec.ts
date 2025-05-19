import { ComponentFixture, TestBed } from '@angular/core/testing';

import { notFoundComponent } from './notFound.component';

describe('notFoundComponent', () => {
  let component: notFoundComponent;
  let fixture: ComponentFixture<notFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [notFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(notFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
