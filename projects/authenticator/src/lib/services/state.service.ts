import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({
  deps: [[new Optional(), new SkipSelf(), StateService]],
  providedIn: 'root',
  useFactory: (instance: StateService | null) => instance || new StateService(),
})
export class StateService {

  private property1!: string;

  public getProperty1(): string {
    return this.property1;
  }

  public setProperty1(value: string): void {
    this.property1 = value;
  }

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
