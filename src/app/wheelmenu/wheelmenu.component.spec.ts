import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelmenuComponent } from './wheelmenu.component';

describe('WheelmenuComponent', () => {
  let component: WheelmenuComponent;
  let fixture: ComponentFixture<WheelmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
