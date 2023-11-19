import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillComponent } from './add-bill/add-bill.component';
import { BillTemplateComponent } from './bill-template/bill-template.component';
import { MedicalBillTemplateComponent } from './medical-bill-template/medical-bill-template.component';
import { PrescriptionComponent } from './prescription/prescription.component';

const routes: Routes = [
  { path: '', component: AddBillComponent },
  { path: 'template', component: BillTemplateComponent },
  { path: 'medicalBill', component: MedicalBillTemplateComponent },
  { path: 'prescription', component: PrescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
