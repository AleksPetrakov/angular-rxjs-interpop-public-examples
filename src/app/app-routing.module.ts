import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstExampleComponent } from './examples/first-example/first-example.component';
import { SecondExampleComponent } from './examples/second-example/second-example.component';
import { ThirdExampleComponent } from './examples/third-example/third-example.component';
import { FourthExampleComponent } from './examples/fourth-example/fourth-example.component';
// import { FourthExampleComponent } from './examples/fourth-example/fourth-example.component';

export interface RouteBase {
  path: string;
  title: string;
  component: any;
}

export const ROUTES: Record<string, RouteBase> = {
  ['Example 1']: {
    path: 'first',
    title: 'Example 1',
    component: FirstExampleComponent,
  },
  ['Example 2']: {
    path: 'second',
    title: 'Example 2',
    component: SecondExampleComponent,
  },
  ['Example 3']: {
    path: 'third',
    title: 'Example 3',
    component: ThirdExampleComponent,
  },
  ['Example 4']: {
    path: 'fourth',
    title: 'Example 4',
    component: FourthExampleComponent,
  }
}
export const realRoutes: Routes = [
  ROUTES['Example 1'],
  ROUTES['Example 2'],
  ROUTES['Example 3'],
  ROUTES['Example 4'],
];

const routes: Routes = [
  ...realRoutes,
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
