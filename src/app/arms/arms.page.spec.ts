import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmsPage } from './arms.page';

describe('ArmsPage', () => {
  let component: ArmsPage;
  let fixture: ComponentFixture<ArmsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
