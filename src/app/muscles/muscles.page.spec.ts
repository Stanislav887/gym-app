import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusclesPage } from './muscles.page';

describe('MusclesPage', () => {
  let component: MusclesPage;
  let fixture: ComponentFixture<MusclesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MusclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
