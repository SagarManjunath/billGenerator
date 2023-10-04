import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
export class Items {
  name:string;
  manufacture:string;
  quantity:number;
  batchNo:string;
  expDate:string;
  mrp:number;
  value:number;
}
@Component({
  selector: 'app-medical-bill-template',
  templateUrl: './medical-bill-template.component.html',
  styleUrls: ['./medical-bill-template.component.scss']
})
export class MedicalBillTemplateComponent implements OnInit {
  patientName = 'Sagar M';
  doctorName ='Praveen';
  billNo='1234';
  billDate ='22/10/2023';
  medicineList : Items [] =[];
  medicine = new Items();
  billTotal = 0;
  @ViewChild("screen") screen: ElementRef;
  @ViewChild("canvas") canvas: ElementRef;
  @ViewChild("downloadLink") downloadLink: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.medicine = {
      "name": "fsfd",
      "manufacture": "ererewr",
      "quantity": 2,
      "batchNo": "sdfsdf",
      "expDate": "12/02/26",
      "mrp": 500,
      "value": 1000
  }
  }

  clickToCapture() {
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL("image/png");
      // this.downloadLink.nativeElement.download = this.billData.customerName+'_'+this.billData.billNo+'_'+this.billData.billDate+".png";
      this.downloadLink.nativeElement.download = "test.png"
      this.downloadLink.nativeElement.click();
    });
  }

  addToBill(){
    let value = this.medicine.quantity * this.medicine.mrp;
    value = Number(value.toFixed(2));
    let obj = {     
        "name":this.medicine.name,
        "manufacture":this.medicine.manufacture,
        "quantity": this.medicine.quantity,
        "batchNo": this.medicine.batchNo,
        "expDate": this.medicine.expDate,
        "mrp": this.medicine.mrp,
        "value": value   
    }
    console.log(obj);
    this.medicineList.push(obj);
    // this.medicineList  = 
    //   [
    //     {
    //         "name": "DYNAGLIPT TAB",
    //         "manufacture": "MAN",
    //         "quantity": 6,
    //         "batchNo": "I7IAV005",
    //         "expDate": "04/24",
    //         "mrp": 75,
    //         "value": 450
    //     },
    //     {
    //         "name": "GLYCOMET GP 2 FORTE",
    //         "manufacture": "USV",
    //         "quantity": 6,
    //         "batchNo": "28023599",
    //         "expDate": "02/24",
    //         "mrp": 109.5,
    //         "value": 657
    //     },
    //     {
    //         "name": "MANOLL TONIC 400GM",
    //         "manufacture": "CHA",
    //         "quantity": 1,
    //         "batchNo": "SMA025",
    //         "expDate": "02/24",
    //         "mrp": 175,
    //         "value": 175
    //     },
    //     {
    //         "name": "PANTODAC DSR CAPS",
    //         "manufacture": "ZYD",
    //         "quantity": 3,
    //         "batchNo": "I203217",
    //         "expDate": "05/24",
    //         "mrp": 276.5,
    //         "value": 829.5
    //     },
    //     {
    //         "name": "PROLOMET XL TAB 25MG",
    //         "manufacture": "SUN",
    //         "quantity": 1,
    //         "batchNo": "GTD2220A",
    //         "expDate": "05/24",
    //         "mrp": 50.05,
    //         "value": 50.05
    //     },
    //     {
    //         "name": "PROLOMET XL TAB 50MG",
    //         "manufacture": "SUN",
    //         "quantity": 3,
    //         "batchNo": "GTD2220A",
    //         "expDate": "05/24",
    //         "mrp": 71.65,
    //         "value": 214.95
    //     },
    //     {
    //         "name": "PROLOMET XL TAB 50MG",
    //         "manufacture": "SUN",
    //         "quantity": 3,
    //         "batchNo": "GTD2220A",
    //         "expDate": "05/24",
    //         "mrp": 71.65,
    //         "value": 214.95
    //     },
    //     {
    //       "name": "VOLINI SPRAY",
    //       "manufacture": "CRO",
    //       "quantity": 3,
    //       "batchNo": "GSZ0087",
    //       "expDate": "05/24",
    //       "mrp": 320,
    //       "value": 960
    //   }
    // ]
    
   
  }
  getTotalBill(){
    this.billTotal = this.medicineList.reduce((n, {value}) => n + value, 0)
  }

}
