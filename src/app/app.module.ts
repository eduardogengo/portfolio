import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';

import { MaterialModule } from './shared/material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RedeSocialComponent } from './componentes/rede-social/rede-social.component';
import { AboutComponent } from './paginas/about/about.component';
import { ResumeComponent } from './paginas/resume/resume.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ContactComponent } from './paginas/contact/contact.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { ApresentacaoComponent } from './componentes/apresentacao/apresentacao.component';
import { SkillsOverviewComponent } from './componentes/skills-overview/skills-overview.component';
import { FooterComponent } from './componentes/footer/footer.component';





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
    ApresentacaoComponent,
    SkillsOverviewComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
