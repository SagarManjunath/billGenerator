import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillComponent } from './add-bill/add-bill.component';
import { BillTemplateComponent } from './bill-template/bill-template.component';

const routes: Routes = [
  { path: '', component: AddBillComponent },
  { path: 'template', component: BillTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
