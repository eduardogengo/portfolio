import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './paginas/contact/contact.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ResumeComponent } from './paginas/resume/resume.component';
import { AboutComponent } from './paginas/about/about.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { AdmComponent } from './paginas/adm/adm.component';
import { DetalheComponent } from './paginas/adm/detalhe/detalhe.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'adm-detalhe', component: DetalheComponent },
  { path: '', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
