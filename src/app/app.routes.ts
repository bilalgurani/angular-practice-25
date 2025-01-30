import { Routes } from '@angular/router';
import {ParentComponent} from './Input-Output decorators/parent/parent.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LifeCycleHooksComponent} from './life-cycle-hooks/life-cycle-hooks.component';

export const routes: Routes = [
  {path: '', component: ParentComponent},
  {path: 'home', component: ParentComponent},
  {path: 'home/:id', component: LifeCycleHooksComponent},
  {path: '**', component: NotFoundComponent},
];
