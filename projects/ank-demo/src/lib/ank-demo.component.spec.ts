import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkDemoComponent } from './ank-demo.component';

describe('AnkDemoComponent', () => {
  let component: AnkDemoComponent;
  let fixture: ComponentFixture<AnkDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnkDemoComponent]
    });
    fixture = TestBed.createComponent(AnkDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
