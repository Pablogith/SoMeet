import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LabelInputComponent} from './label-input.component';

describe('BasicInputComponent', () => {
  let component: LabelInputComponent;
  let fixture: ComponentFixture<LabelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabelInputComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelInputComponent);
    component = fixture.componentInstance;
    component.inputData = {
      title: 'TEST Title',
      name: 'TEST Name',
      type: 'text'
    };
    fixture.detectChanges();
  });

  it('label title should show TEST Title', () => {
    expect(fixture.nativeElement.querySelector('div>label').innerHTML).toBe('TEST Title');
  });

  it('input type should be text type', () => {
    expect(fixture.nativeElement.querySelector('div>div>input').type).toBe('text');
  });

  it('input placeholder should does not exist', () => {
    expect(fixture.nativeElement.querySelector('div>div>input').placeholder).toBe('undefined');
  });

  it(`input placeholder should show 'I'm placeholder'`, () => {
    component.inputData.placeholder = 'I\'m placeholder';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div>div>input').placeholder).toBe('I\'m placeholder');
  });
});
