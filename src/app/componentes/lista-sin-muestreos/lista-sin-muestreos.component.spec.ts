import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSinMuestreosComponent } from './lista-sin-muestreos.component';

describe('ListaSinMuestreosComponent', () => {
  let component: ListaSinMuestreosComponent;
  let fixture: ComponentFixture<ListaSinMuestreosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSinMuestreosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSinMuestreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
