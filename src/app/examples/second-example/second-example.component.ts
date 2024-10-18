import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { SecondExampleChildComponent } from './second-example-child/second-example-child.component';
import { outputToObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-second-example',
  templateUrl: './second-example.component.html',
})
export class SecondExampleComponent implements AfterViewInit {
  @ViewChild(SecondExampleChildComponent) private childComponent: SecondExampleChildComponent | undefined;
  myChildOutputtedSignal = signal(0);
  myChildOutputtedObservable$: Observable<number> | undefined;

  ngAfterViewInit() {
    // No need to unsubscribe from this subscription on Destroy
    this.childComponent!.myObservableChange.subscribe((value: number) => {
      // Save the value as you wish: BehaviourSubject, Signal, etc.
      this.myChildOutputtedSignal.set(value);
    });

    // Better to unsubscribe from this subscription on Destroy Because the Observable is created in the constructor
    this.myChildOutputtedObservable$ = outputToObservable(this.childComponent!.myObservableChange).pipe(
      untilDestroyed(this),
    );
  }
}
