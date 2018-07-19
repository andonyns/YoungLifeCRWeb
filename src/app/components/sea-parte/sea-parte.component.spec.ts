import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaParteComponent } from './sea-parte.component';

describe('SeaParteComponent', () => {
  let component: SeaParteComponent;
  let fixture: ComponentFixture<SeaParteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaParteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
