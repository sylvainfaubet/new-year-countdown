import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRendererComponent } from './message-renderer.component';

describe('MessageRendererComponent', () => {
  let component: MessageRendererComponent;
  let fixture: ComponentFixture<MessageRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
