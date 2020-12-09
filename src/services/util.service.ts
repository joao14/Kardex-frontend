
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MenuItem } from 'primeng';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  isLoading= new Subject<any>();

  rolselected=new Subject<any>();

  typerolselected= new Subject<any>();

  itemsSource = new Subject<MenuItem[]>();

  user= new Subject<any>();

  constructor() { }

  

}
