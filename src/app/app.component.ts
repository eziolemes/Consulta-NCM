import { Component, OnInit } from '@angular/core';
import { Router } '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Consulta-NCM';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}