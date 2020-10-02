import { Component, OnInit } from '@angular/core';

import db from '../assets/db/registros.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eduardogengo';

ngOnInit() {
  console.log("Db", db.registros)
}

}
