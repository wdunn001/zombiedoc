import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchMiniGameComponent } from './stitch-mini-game.component';

describe('StitchMiniGameComponent', () => {
  let component: StitchMiniGameComponent;
  let fixture: ComponentFixture<StitchMiniGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StitchMiniGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchMiniGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
