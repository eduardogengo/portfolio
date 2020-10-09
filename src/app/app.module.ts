import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './shared/material/material.module'
import { ComponentesModule } from './componentes/componentes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './paginas/about/about.component';
import { ResumeComponent } from './paginas/resume/resume.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ContactComponent } from './paginas/contact/contact.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';

import { Utils } from './shared/utils/utils';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    BlogComponent,
    ContactComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ComponentesModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [Utils],
  bootstrap: [AppComponent]
})
export class AppModule { }
