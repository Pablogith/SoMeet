import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SavedPostPageComponent} from './saved-post-page.component';

describe('SavedPostPageComponent', () => {
  let component: SavedPostPageComponent;
  let fixture: ComponentFixture<SavedPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedPostPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
