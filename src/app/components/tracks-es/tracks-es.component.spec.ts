import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksESComponent } from './tracks-es.component';

describe('TracksESComponent', () => {
  let component: TracksESComponent;
  let fixture: ComponentFixture<TracksESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracksESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
