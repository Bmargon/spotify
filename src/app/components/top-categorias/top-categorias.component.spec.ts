import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategoriasComponent } from './top-categorias.component';

describe('TopCategoriasComponent', () => {
  let component: TopCategoriasComponent;
  let fixture: ComponentFixture<TopCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
