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
        'companyAddress':['Ganaganagar, Bangalore'],
        'companyMobile':['7259360406'],
        'billNo':['654454'],
        'billDate':[''], 
        'driverName':[''] ,
        'carNo':[''],
        'customerName':[''],
        'customerAddress':[''],
        'pickupLocation':[''],
        'dropLocation':[''],
        'billAmount':[0],
        'otherChargers':[0],
        'totalAmount':[0]
    });
    
  }

  gettotalBill(){
    let totalAmount = Number(this.SignupForm.get('billAmount')?.value) + Number(this.SignupForm.get('otherChargers')?.value);
    this.SignupForm.get('totalAmount')?.patchValue(totalAmount);
  }

  onSubmit(){
    console.log(this.SignupForm);
    this.dataService.setNewbill({
      bill: this.SignupForm.value
    });
    this.router.navigate(['template'], { relativeTo: this.route });
  }

}
