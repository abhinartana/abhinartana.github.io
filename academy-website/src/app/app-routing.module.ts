import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JoinUsComponent } from './join-us/join-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'join', component: JoinUsComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
