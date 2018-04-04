import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommDetailsComponent } from './comm-details.component';

describe('CommDetailsComponent', () => {
  let component: CommDetailsComponent;
  let fixture: ComponentFixture<CommDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
