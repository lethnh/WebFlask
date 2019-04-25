import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCateogryComponent } from './manager-cateogry.component';

describe('ManagerCateogryComponent', () => {
  let component: ManagerCateogryComponent;
  let fixture: ComponentFixture<ManagerCateogryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerCateogryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCateogryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
