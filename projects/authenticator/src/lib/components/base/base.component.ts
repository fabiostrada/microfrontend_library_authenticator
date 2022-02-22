import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnDestroy {

  protected unsubscribeAll: Subject<any> = new Subject();

  constructor() { }

  ngOnDestroy(): void {
      this.unsubscribeAll.next(0);
      this.unsubscribeAll.complete();
  }

}
