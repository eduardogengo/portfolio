import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { WorkExperienceCardComponent } from './work-experience-card/work-experience-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SkillsOverviewComponent } from './skills-overview/skills-overview.component';
import { SkillsCardComponent } from './skills-card/skills-card.component';
import { RedeSocialComponent } from './rede-social/rede-social.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';



@NgModule({
  declarations: [
    ApresentacaoComponent,
    ContactCardComponent,
    FooterComponent,
    HeaderComponent,
    RedeSocialComponent,
    SkillsCardComponent,
    SkillsOverviewComponent,
    ToolbarComponent,
    WorkExperienceCardComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  exports: [
    ApresentacaoComponent,
    ContactCardComponent,
    FooterComponent,
    HeaderComponent,
    RedeSocialComponent,
    SkillsCardComponent,
    SkillsOverviewComponent,
    ToolbarComponent,
    WorkExperienceCardComponent,

  ]
})
export class ComponentesModule { }
