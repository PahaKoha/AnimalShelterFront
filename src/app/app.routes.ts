import { Routes } from '@angular/router';
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {ProfileComponent} from "./components/profile/profile.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'profile', component: ProfileComponent}
];
