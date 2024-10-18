import { Component, inject, Signal } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { toSignal } from '@angular/core/rxjs-interop';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

interface Item {
  id: number;
  name: string;
};

@UntilDestroy()
@Component({
  selector: 'app-fourth-example',
  templateUrl: './fourth-example.component.html'
})
export class FourthExampleComponent {
  dataSignal: Signal<Item[] | undefined>;
  data$: Observable<Item[]>;
  db: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.db, 'items');

    // Approach 1
    this.data$ = collectionData(itemCollection).pipe(
      shareReplay(1),
      untilDestroyed(this),
    );

    // Approach 2
    this.dataSignal = toSignal(collectionData(itemCollection));
  }
}
