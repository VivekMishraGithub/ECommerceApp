import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private getCount = new BehaviorSubject<number>(0);
  sendCount: Observable<number> = this.getCount.asObservable();

  constructor() { }

  sendCounter(msg: number){
    this.getCount.next(msg);
  }

  getCounter(): Observable<number>{
   return this.getCount.asObservable();
  }
}
