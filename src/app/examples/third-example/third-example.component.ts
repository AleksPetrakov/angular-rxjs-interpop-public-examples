import { AfterViewInit, Component, Signal, viewChild } from '@angular/core';
import { ThirdExampleChildComponent } from './third-example-child/third-example-child.component';

@Component({
  selector: 'app-third-example',
  templateUrl: './third-example.component.html',
})
export class ThirdExampleComponent implements AfterViewInit {
  childComponent: Signal<ThirdExampleChildComponent | undefined>
    = viewChild<ThirdExampleChildComponent>(ThirdExampleChildComponent);
  oldApproachValue = 0;
  newApproachValue = 0;

  ngAfterViewInit() {
    // No need to unsubscribe from this subscription on Destroy
    this.childComponent()!.incrementNewApproach.subscribe(() => {
      this.newApproachValue++;
    });
  }

  incrementDefault() {
    this.oldApproachValue++;
  }
}
