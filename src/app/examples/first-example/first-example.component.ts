import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-first-example',
  templateUrl: './first-example.component.html',
})
export class FirstExampleComponent {
  mySignal: WritableSignal<number> = signal(0);
  squaredSignal = computed(() => this.myDataTransformFn(this.mySignal()));
  myObservable$: Observable<number>;

  constructor() {
    this.myObservable$ = toObservable(this.mySignal);
  }

  incrementSignal() {
    this.mySignal.set(this.mySignal() + 1);
  }

  myDataTransformFn(value: number): number {
    // You can implement any data transformation logic here
    return value ** 2;
  }
}
