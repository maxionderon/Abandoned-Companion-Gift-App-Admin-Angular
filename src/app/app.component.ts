import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'companion-gift-app-admin';

  constructor(private router:Router) {

    const path = localStorage.getItem("path");

    if( path ) {

      localStorage.removeItem("path");

      this.router.navigate([path]);

    }

  }

}
