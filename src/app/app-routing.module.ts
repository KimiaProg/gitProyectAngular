import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './users/repos/repos.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'gitUsers', component: UsersComponent},
{path: 'contact', component: ContactComponent},
{path: 'gitUsers/:id', component: UsersComponent},
{path: 'gitUsers/:id/repos', component: ReposComponent},
{path: '', component: HomeComponent},
{path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
