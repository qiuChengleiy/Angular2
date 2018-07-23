import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TestComponent } from './test/test.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '*',
    redirectTo: 'login',
    // pathMatch: 'full'
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  }
];

export const Router: ModuleWithProviders = RouterModule.forRoot(routes);

