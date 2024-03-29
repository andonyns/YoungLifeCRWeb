import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosComponent } from './contactenos.component';

describe('ContactenosComponent', () => {
  let component: ContactenosComponent;
  let fixture: ComponentFixture<ContactenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
