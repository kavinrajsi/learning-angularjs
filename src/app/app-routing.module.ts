import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ServiceComponent } from './service/service.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'blog',
    component : BlogComponent
  },
  {
    path : 'project',
    component : ProjectComponent
  },
  {
    path : 'service',
    component : ServiceComponent
  },
  {
    path : '**',
    redirectTo : '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }