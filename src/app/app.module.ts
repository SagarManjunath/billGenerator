import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillTemplateComponent } from './bill-template/bill-template.component';
import { MedicalBillTemplateComponent } from './medical-bill-template/medical-bill-template.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBillComponent,
    BillTemplateComponent,
    MedicalBillTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
