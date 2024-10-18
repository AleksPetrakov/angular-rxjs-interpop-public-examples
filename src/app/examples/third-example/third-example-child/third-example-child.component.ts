import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-third-example-child',
  templateUrl: './third-example-child.component.html',
})
export class ThirdExampleChildComponent {
  @Output() incrementOldApproach = new EventEmitter<void>();
  // The output() function provides numerous benefits over decorator-based @Output and EventEmitter:
  // 1. It is more concise and easier to read.
  // 2. It is more performant.
  // 3. It is more flexible.
  incrementNewApproach = output<void>();

  increment() {
    this.incrementOldApproach.emit();
    this.incrementNewApproach.emit();
  }
}
