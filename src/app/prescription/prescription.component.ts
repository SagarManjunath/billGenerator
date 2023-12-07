import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {
  patientName = 'Sagar M';
  age ='31y 5m';
  gender = 'Male';
  date = '19 Nov 2023';
  doctorName ='Dr.Reshma';
  doctorRegNo ='94223';
  chiefComplaints: string[] =[];
  allergies :string[] =[];
  diagnosis :string[] =[];
  diagnosticTest :string[] =[];
  prescription :string[] =[];
  adviceList :string[] =[];
  isChiefComplaintsRequired :boolean =true;
  isallergiesRequired :boolean =true;
  isdiagnosisRequired :boolean =true;
  isdiagnosticTestRequired :boolean =true;
  isprescriptionRequired :boolean =true;
  isadviceListRequired :boolean =true;
  presValue = '';
  @ViewChild("screen") screen: ElementRef;
  @ViewChild("canvas") canvas: ElementRef;
  @ViewChild("downloadLink") downloadLink: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.chiefComplaints = ['Variations in BP and sugar and tiredness'];
    this.allergies= ['No drug allergy'];
    this.diagnosis = [
      'Vitamin B12 deficiency (diagnosed)',
      'Vitamin D deficiency (diagnosed)',
      'Iron deficiency anemia (diagnosed)',
      'Hypothyroidism (previously diagnosed)',
      'Dyslipidemia (diagnosed)',
      'Type 2 diabetes mellitus (previously diagnosed)'
    ];
    this.diagnosticTest =[
      'FT3, FT4, TSH (After 6 weeks)',
      'HbA1c (After 3 month(s))',
      'Fasting lipid profile (After 3 month(s))'
    ],
    this.prescription = [
      'Cabgolin 0.5mg (4)',
      'Etoximed 90mg (30)',
      'Becasales cap (40)',
      'Betalarc G2 100ml (1)',
    ],
    this.adviceList =[
      'Eat the iron-rich foods like dark green, leafy vegetables, dried fruit, seeds & nuts , beans, fortified bread or cereals',
      'Consult dietician on mfine for weight reduction',
      'Follow up after 6 Weeks (on 11 Nov 2023).'
    ]
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

  addPrescription(type:string){
    switch (type) {
      case 'complaints':
        this.chiefComplaints.push(this.presValue);
        break;

      case 'allergies':
        this.allergies.push(this.presValue);
        break;

      case 'diagnosis':
        this.diagnosis.push(this.presValue);
        break;

      case 'diagnoTest':
        this.diagnosticTest.push(this.presValue);
        break;

      case 'prescription':
        this.prescription.push(this.presValue);
        break;

      case 'advice':
        this.adviceList.push(this.presValue);
        break;
    }
    
  }
  clearPrescription(type:string){
     switch (type) {
       case 'complaints':
         this.chiefComplaints = [];
         break;
       case 'allergies':
         this.allergies = [];
         break;
       case 'diagnosis':
         this.diagnosis = [];
         break;
       case 'diagnoTest':
         this.diagnosticTest = [];
         break;
       case 'prescription':
         this.prescription = [];
         break;
       case 'advice':
         this.adviceList = [];
         break;
     }
    
  }
}
