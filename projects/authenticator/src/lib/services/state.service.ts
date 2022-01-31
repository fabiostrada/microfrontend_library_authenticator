import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public setItem<T>(value: T, type: string): void {
    localStorage.removeItem(type);
    localStorage.setItem(type, JSON.stringify(value));
  }

  public getItem<T>(type: string): T | undefined {
    const item: any = localStorage.getItem(type);
    return !!item ? JSON.parse(item) : null;
  }

  public removeItem(type: string): void {
    localStorage.removeItem(type);
  }

}
