import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(){}

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItems(){
   const saveItem = Object.keys(localStorage).map(key => localStorage.getItem(key))
   return saveItem
  }

  public removeItem(key:string) {
    localStorage.removeItem(key);
  }
}
