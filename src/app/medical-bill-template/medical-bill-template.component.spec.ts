import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBillTemplateComponent } from './medical-bill-template.component';

describe('MedicalBillTemplateComponent', () => {
  let component: MedicalBillTemplateComponent;
  let fixture: ComponentFixture<MedicalBillTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalBillTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalBillTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
