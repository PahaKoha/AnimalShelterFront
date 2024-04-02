import { Routes } from '@angular/router';
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {TestComponent} from "./components/test/test.component";

export const routes: Routes = [
  {path: 'admin', component: AdminPageComponent},
  {path: 'test', component: TestComponent}
];
