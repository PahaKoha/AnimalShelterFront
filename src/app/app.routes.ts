import { Routes } from '@angular/router';
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {TestComponent} from "./components/test/test.component";
import {MainPageComponent} from "./components/main-page/main-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'test', component: TestComponent}
];
