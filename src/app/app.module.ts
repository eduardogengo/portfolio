import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MaterialModule } from './shared/material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RedeSocialComponent } from './componentes/rede-social/rede-social.component';
import { AboutComponent } from './paginas/about/about.component';
import { ResumeComponent } from './paginas/resume/resume.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ContactComponent } from './paginas/contact/contact.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RedeSocialComponent,
    AboutComponent,
    ResumeComponent,
    BlogComponent,
    ContactComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
