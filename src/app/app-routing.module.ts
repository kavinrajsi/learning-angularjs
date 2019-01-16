import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ServiceComponent } from './service/service.component';

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
    path : 'service',
    component : ServiceComponent
  },
  {
    path : '**',
    redirectTo : 'service',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
