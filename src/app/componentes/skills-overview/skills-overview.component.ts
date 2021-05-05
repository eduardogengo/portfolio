import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-overview',
  templateUrl: './skills-overview.component.html',
  styleUrls: ['./skills-overview.component.scss']
})
export class SkillsOverviewComponent implements OnInit {

  feTechs: string[] = ['angular', 'css', 'html'];
  beTechs: string[] = ['node', 'mongodb'];
  othersTechs: string[] = ['git'];

  constructor() { }

  ngOnInit(): void {
  }

}
