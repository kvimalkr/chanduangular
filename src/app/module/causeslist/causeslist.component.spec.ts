import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseslistComponent } from './causeslist.component';



describe('CauseslistComponent', () => {
  let component: CauseslistComponent;
  let fixture: ComponentFixture<CauseslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
