import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray, FormBuilder} from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {
  SignupForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private dataService:DataService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
        'companyname':['Gowri Tours & Travels'],
        'companyAddress':['#29,11th Cross, Lakshmayya block , Ganaganagar, Bangalore'],
        'companyMobile':['7259360406,8722222522'],
        'billNo':[''],
        'billDate':[''], 
        'driverName':[''] ,
        'carNo':[''],
        'customerName':[''],
        'customerAddress':[''],
        'pickupLocation':[''],
        'dropLocation':[''],
        'totalKms':[0],
        'ratePerKm':[0],
        'tollCharges':[0],
        'bataCharges':[0],
        'billAmount':[0],
        'otherChargers':[0],
        'totalAmount':[0],
        'hours':[0],
        'hrsKMS':[0],
        'hourlyCharges':[0],
        'extraHours':[0],
        'extraHoursQuantity':[0],
        'extraHoursCharges':[0],
        'extraKMS':[0],
        'extraKMSQuantity':[0],
        'extraKMSCharges':[0]
    });
    
  }

  gettotalBill(){
    console.log(Number(this.SignupForm.get('totalKms')?.value));
    let kmsCharges = 0;
    let tollCharges = 0;
    let bataCharges = 0;
    let extraHoursCharges =0;
    let extraKMSsCharges = 0;
    let hourlyChar =0;
    if(Number(this.SignupForm.get('totalKms')?.value)){
      kmsCharges = Number(this.SignupForm.get('totalKms')?.value) * Number(this.SignupForm.get('ratePerKm')?.value);
    }
    if(Number(this.SignupForm.get('tollCharges')?.value)){
      tollCharges = Number(this.SignupForm.get('tollCharges')?.value);
    }
    if(Number(this.SignupForm.get('bataCharges')?.value)){
      bataCharges = Number(this.SignupForm.get('bataCharges')?.value);
    }
    if(Number(this.SignupForm.get('hourlyCharges')?.value)){
      hourlyChar = Number(this.SignupForm.get('hourlyCharges')?.value);
    }
    if(Number(this.SignupForm.get('extraHoursCharges')?.value)){
      extraHoursCharges = Number(this.SignupForm.get('extraHoursCharges')?.value);
    }
    if(Number(this.SignupForm.get('extraKMSCharges')?.value)){
      extraKMSsCharges = Number(this.SignupForm.get('extraKMSCharges')?.value);
    }
    let totalAmount = Number(this.SignupForm.get('billAmount')?.value) + Number(this.SignupForm.get('otherChargers')?.value) + kmsCharges + tollCharges+bataCharges+hourlyChar +extraHoursCharges+extraKMSsCharges;
    this.SignupForm.get('totalAmount')?.patchValue(totalAmount);
  }

  getExtraHorsTotalBill(){
    let extraHoursCharges =  Number(this.SignupForm.get('extraHours')?.value) * Number(this.SignupForm.get('extraHoursQuantity')?.value);
    this.SignupForm.get('extraHoursCharges')?.patchValue(extraHoursCharges);
    this.gettotalBill();
  }

  getExtraKMSTotalBill(){
    let extraHoursCharges =  Number(this.SignupForm.get('extraKMS')?.value) * Number(this.SignupForm.get('extraKMSQuantity')?.value);
    this.SignupForm.get('extraKMSCharges')?.patchValue(extraHoursCharges);
    this.gettotalBill();
  }

  onSubmit(){
    console.log(this.SignupForm);
    this.dataService.setNewbill({
      bill: this.SignupForm.value
    });
    this.router.navigate(['template'], { relativeTo: this.route });
  }

}
