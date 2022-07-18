import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMediaComponent } from './chart-media.component';

describe('ChartMediaComponent', () => {
  let component: ChartMediaComponent;
  let fixture: ComponentFixture<ChartMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
