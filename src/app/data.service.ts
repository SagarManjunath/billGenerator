import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private newBill = new BehaviorSubject<any>({});
  constructor() { }

  setNewbill(newBill: any) {
    this.newBill.next(newBill);
  }

  getBill() {
    return this.newBill.asObservable();
  }
}
