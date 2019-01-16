import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { StaticComponent } from './static/static.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    AboutComponent,
    BlogComponent,
    ProjectComponent,
    ClientComponent,
    StaticComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
