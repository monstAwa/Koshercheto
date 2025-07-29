import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sendMessage } from './sendMessage';

describe('Signupform', () => {
  let component: sendMessage;
  let fixture: ComponentFixture<sendMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sendMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sendMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});