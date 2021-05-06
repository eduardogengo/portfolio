import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { WorkExperienceCardComponent } from './work-experience-card/work-experience-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SkillsOverviewComponent } from './skills-overview/skills-overview.component';
import { SkillsCardComponent } from './skills-card/skills-card.component';
import { RedeSocialComponent } from './rede-social/rede-social.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactItemComponent } from './contact-container/contact-item/contact-item.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';



@NgModule({
  declarations: [
    ApresentacaoComponent,
    ContactItemComponent,
    FooterComponent,
    HeaderComponent,
    RedeSocialComponent,
    SkillsCardComponent,
    SkillsOverviewComponent,
    ToolbarComponent,
    WorkExperienceCardComponent,
    ContactContainerComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  exports: [
    ApresentacaoComponent,
    ContactItemComponent,
    FooterComponent,
    HeaderComponent,
    RedeSocialComponent,
    SkillsCardComponent,
    SkillsOverviewComponent,
    ToolbarComponent,
    WorkExperienceCardComponent,
    ContactContainerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentesModule { }
