import { AfterViewInit, Component, DestroyRef, inject, Signal, signal, viewChild, WritableSignal } from '@angular/core';
import { SecondExampleChildComponent } from './second-example-child/second-example-child.component';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second-example',
  templateUrl: './second-example.component.html',
})
export class SecondExampleComponent implements AfterViewInit {
  destroyRef = inject(DestroyRef);
  childComponent: Signal<SecondExampleChildComponent | undefined>
    = viewChild<SecondExampleChildComponent>(SecondExampleChildComponent);
  myChildOutputtedSignal: WritableSignal<number> = signal(0);
  myChildOutputtedObservable$: Observable<number> = toObservable(this.myChildOutputtedSignal);

  ngAfterViewInit() {
    // No need to unsubscribe from this subscription on Destroy
    this.childComponent()!.myObservableChange.subscribe((value: number) => {
      // Save the value as you wish: BehaviourSubject, Signal, etc.
      this.myChildOutputtedSignal.set(value);
    });

    // Better to unsubscribe from this subscription on Destroy Because the Observable
    // is not guaranteed to complete when the component is destroyed
    this.myChildOutputtedObservable$.pipe(
      takeUntilDestroyed(this.destroyRef),
    );
  }
}
