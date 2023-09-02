import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { jsPDF } from "jspdf"; 
@Component({
  selector: 'app-bill-template',
  templateUrl: './bill-template.component.html',
  styleUrls: ['./bill-template.component.scss']
})
export class BillTemplateComponent implements OnInit {
@ViewChild("couponPage", { static: true }) couponPage: ElementRef;
public billData:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getBill().subscribe((bill) =>{
      console.log(bill['bill']);
      this.billData = bill['bill'];
    })
  }

  openPDF(): void {
    const DATA = this.couponPage.nativeElement;
    const doc: jsPDF = new jsPDF("p", "pt", "a3");
    doc.html(DATA, {
      x: 0,
      y: 0,     
      callback: () => {
         doc.save();
      },
    });
    // doc.html(DATA, {
    //   callback: (doc) => {
    //     doc.output("dataurlnewwindow");
    //   }
    // });
  }
}
