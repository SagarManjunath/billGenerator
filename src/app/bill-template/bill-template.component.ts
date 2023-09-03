import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import jspdf, {jsPDF} from 'jspdf';
//import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-bill-template',
  templateUrl: './bill-template.component.html',
  styleUrls: ['./bill-template.component.scss']
})
export class BillTemplateComponent implements OnInit {
@ViewChild("couponPage", { static: true }) couponPage: ElementRef;
@ViewChild("screen") screen: ElementRef;
@ViewChild("canvas") canvas: ElementRef;
@ViewChild("downloadLink") downloadLink: ElementRef;
public billData:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getBill().subscribe((bill) =>{
      this.billData = bill['bill'];
    })
  //   this.billData = {
  //     "companyname": "Gowri Tours & Travels",
  //     "companyAddress": "#392/14,LOKESH REDDY BUILDING,CELEBRATY PARADISE LAYOUT, DODDATHOGUR, ELECTRONIC CITY PHASE I, BANGALORE 560100",
  //     "companyMobile": "+919008569653",
  //     "billNo": "654454",
  //     "billDate": "02/Sep/2023",
  //     'driverName':'abc',
  //     'carNo':'ka17u3979',
  //     "customerName": "Sagar M",
  //     "customerAddress": "Bommanahalli",
  //     "pickupLocation": "e city",
  //     "dropLocation": "airport",
  //     "billAmount": "2321",
  //     "otherChargers": "30",
  //     "totalAmount": "2351"
  // }
  }

  openPDF(): void {
    const DATA = this.couponPage.nativeElement;
    const doc: jsPDF = new jsPDF("p", "pt", "a2");  
    doc.html(DATA, {
      callback: (doc) => {
        // doc.output("dataurlnewwindow",{filename:this.billData.customerName+'_'+this.billData.billNo+'_'+this.billData.billDate});
        doc.setPage(1)
        doc.save(this.billData.customerName+'_'+this.billData.billNo+'_'+this.billData.billDate);
        
      }
    });
  }

  public downloadPDF() {
   //  const doc = new jsPDF();
  //    doc.addHTML(document.body, function() {
  //     doc.save('*.pdf');
  // });

    // const specialElementHandlers = {
    //   '#editor': function () {
    //     return true;
    //   }
    // };
    // const content = this.couponPage.nativeElement;

    // doc.fromHTML(content.innerHTML, 15, 15, {
    //   width: 190,
    //   'elementHandlers': specialElementHandlers
    // });

    // doc.save(this.billData.customerName+'_'+this.billData.billNo+'_'+this.billData.billDate+'.pdf');
  }

  public convetToPDF()
{
  const DATA = this.couponPage.nativeElement;
html2canvas(DATA).then(canvas => {
// Few necessary setting options
var imgWidth = 200;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save(this.billData.customerName+'_'+this.billData.billNo+'_'+this.billData.billDate+'.pdf'); // Generated PDF
});
}

clickToCapture() {
  html2canvas(this.screen.nativeElement).then(canvas => {
    this.canvas.nativeElement.src = canvas.toDataURL();
    this.downloadLink.nativeElement.href = canvas.toDataURL("image/png");
    this.downloadLink.nativeElement.download = this.billData.customerName+'_'+this.billData.billNo+'_'+this.billData.billDate+".png";
    this.downloadLink.nativeElement.click();
  });
}
}
