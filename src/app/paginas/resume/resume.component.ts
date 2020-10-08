import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  titulo = 'Resume'
  subtitulo = 'Some of the my most relevant IT professional experiences are listed here'

  constructor() { }

  ngOnInit(): void {
  }

}
