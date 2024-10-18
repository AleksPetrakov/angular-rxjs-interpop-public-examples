import { Component, OutputRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { outputFromObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-second-example-child',
  templateUrl: './second-example-child.component.html',
})
export class SecondExampleChildComponent {
  myObservableSubject$ = new BehaviorSubject<number>(0);
  myObservableChange: OutputRef<number> = outputFromObservable(this.myObservableSubject$);
  // Some Observables are guaranteed to emit synchronously, such as BehaviorSubject.
  // In those cases, you can specify the requireSync: true option
  mySignalFromObservable = toSignal(this.myObservableSubject$, { requireSync: true });

  incrementValue() {
    this.myObservableSubject$.next(this.myObservableSubject$.value + 1);
  }
}
