import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SecondExampleChildComponent
} from './examples/second-example/second-example-child/second-example-child.component';
import { FirstExampleComponent } from './examples/first-example/first-example.component';
import { SecondExampleComponent } from './examples/second-example/second-example.component';
import { CommonModule } from '@angular/common';
import { ThirdExampleComponent } from './examples/third-example/third-example.component';
import { ThirdExampleChildComponent } from './examples/third-example/third-example-child/third-example-child.component';
import { FourthExampleComponent } from './examples/fourth-example/fourth-example.component';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    FirstExampleComponent,
    SecondExampleComponent,
    SecondExampleChildComponent,
    ThirdExampleComponent,
    ThirdExampleChildComponent,
    FourthExampleComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
