import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'list', component: ProjectListComponent },
  { path: 'new', component: NewProjectComponent},
  { path: 'update/:id', component:NewProjectComponent}
];
