import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LampadaPage } from './lampada.page';

describe('LampadaPage', () => {
  let component: LampadaPage;
  let fixture: ComponentFixture<LampadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LampadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
